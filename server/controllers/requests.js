import crypto from 'crypto';
import dateFormat from 'dateformat';
import querystring from 'qs';
import { ACCEPTED, PENDING } from '../enums/status.js';
import mailer from '../mailer/index.js';
import requestMail from '../mailer/request-mail.js';
import { RequestModel } from '../models/request-model.js';
import { UserModel } from '../models/user-model.js';
import { OrderModel } from '../models/order-model.js';

export const getRequests = async (req, res) => {
  try {
    const requests = await RequestModel.find({
      status: PENDING
    }).populate('user', ['fullName', 'avatar']);
    res.status(200).json({ success: true, requests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const createRequest = async (req, res) => {
  const { identityFront, identityBack, studentCard, studentCode } = req.body;
  if (!identityFront || !identityBack || !studentCard || !studentCode)
    return res.status(400).json({
      success: false,
      message: 'Vui lòng điền đầy đủ thông tin.'
    });

  try {
    const [validStudentCodeUser, validStudentCodeRequest, _] =
      await Promise.all([
        UserModel.findOne({
          code: studentCode,
          _id: { $ne: req.userId }
        }),
        RequestModel.findOne({
          studentCode,
          user: { $ne: req.userId }
        }),
        RequestModel.findOneAndDelete({
          user: req.userId
        })
      ]);
    if (validStudentCodeUser)
      return res
        .status(400)
        .json({ success: false, message: 'Mã sinh viên đã tồn tại' });
    if (validStudentCodeRequest)
      return res
        .status(400)
        .json({ success: false, message: 'Mã sinh viên đã tồn tại' });

    const newRequest = req.body;
    let request = new RequestModel({
      ...newRequest,
      user: req.userId
    });
    await request.save();
    request = await request.populate('user', ['fullName', 'avatar']);
    res
      .status(200)
      .json({ success: true, message: 'Gửi yêu cầu thành công', request });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const updateRequest = async (req, res) => {
  const { status } = req.body;
  if (!status)
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng điền đầy đủ thông tin.' });

  try {
    const request = await RequestModel.findOneAndUpdate(
      { _id: req.params.id },
      { status },
      { new: true }
    ).populate('user', ['id', 'fullName', 'avatar', 'email']);
    if (!request)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy.' });
    if (status === ACCEPTED) {
      await UserModel.findOneAndUpdate(
        {
          _id: request.user.id
        },
        { isExternal: false, code: request.studentCode },
        { new: true }
      );
    }

    const emailContent = requestMail(status);
    mailer(request.user.email, emailContent);

    res.status(200).json({
      success: true,
      message: 'Cập nhật thành công!',
      request
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const createPayment = async (req, res) => {
  let ipAddr =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  let vnpUrl = process.env.VNP_URL;
  let date = new Date();
  let createDate = dateFormat(date, 'yyyymmddHHmmss');
  let orderId = dateFormat(date, 'HHmmss');
  let amount = req.body.amount;
  let bankCode = req.body.bankCode;
  let orderInfo = req.body.orderDescription;
  let orderType = req.body.orderType;
  let locale = req.body.language;
  if (locale === null || locale === '') {
    locale = 'vn';
  }
  let currCode = 'VND';
  let vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.0';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = process.env.VNP_TMNCODE;
  vnp_Params['vnp_Locale'] = locale;
  vnp_Params['vnp_CurrCode'] = currCode;
  vnp_Params['vnp_TxnRef'] = orderId;
  vnp_Params['vnp_OrderInfo'] = orderInfo;
  vnp_Params['vnp_OrderType'] = orderType;
  vnp_Params['vnp_Amount'] = amount * 100;
  vnp_Params['vnp_ReturnUrl'] = process.env.VNP_RETURNURL;
  vnp_Params['vnp_IpAddr'] = ipAddr;
  vnp_Params['vnp_CreateDate'] = createDate;
  if (bankCode !== null && bankCode !== '') {
    vnp_Params['vnp_BankCode'] = bankCode;
  }
  vnp_Params = sortObject(vnp_Params);
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let hmac = crypto.createHmac('sha512', process.env.VNP_HASHSECRET);
  let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
  vnp_Params['vnp_SecureHash'] = signed;
  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
  let order = new OrderModel({
    orderId,
    user: req.userId
  });
  await order.save();
  res.status(200).json({ success: true, vnpUrl });
};

export const vnpayReturn = async (req, res) => {
  let vnp_Params = req.query;
  let secureHash = vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];
  vnp_Params = sortObject(vnp_Params);
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let hmac = crypto.createHmac('sha512', process.env.VNP_HASHSECRET);
  let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
  if (secureHash === signed) {
    const order = await OrderModel.findOne({
      orderId: vnp_Params['vnp_TxnRef']
    });
    if (order) {
      await UserModel.findOneAndUpdate(
        { _id: order.user },
        { isExternal: false },
        { new: true }
      );
    } else {
      res.status(400).json({ success: true, message: 'Payment failed' });
    }
    res.status(200).json({ success: true, message: 'Payment success' });
  } else {
    res.status(200).json({ success: false, message: 'Internal server error' });
  }
};

// export const vnpayIpn = (req, res) => {
//   let vnp_Params = req.query;
//   let secureHash = vnp_Params['vnp_SecureHash'];
//   delete vnp_Params['vnp_SecureHash'];
//   delete vnp_Params['vnp_SecureHashType'];
//   vnp_Params = sortObject(vnp_Params);
//   let signData = querystring.stringify(vnp_Params, { encode: false });
//   let hmac = crypto.createHmac('sha512', process.env.VNP_HASHSECRET);
//   let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
//   if (secureHash === signed) {
//     console.log('>>> vnpayIpn');
//     res.status(200).json({ RspCode: '00', Message: 'success' });
//   } else {
//     res.status(200).json({ RspCode: '97', Message: 'Fail checksum' });
//   }
// };

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
}
