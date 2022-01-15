import { ACCEPTED, PENDING } from '../enums/status.js';
import mailer from '../mailer/index.js';
import requestMail from '../mailer/request-mail.js';
import { RequestModel } from '../models/request-model.js';
import { UserModel } from '../models/user-model.js';

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