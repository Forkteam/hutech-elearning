import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import activateMail from '../mailer/activate-mail.js';
import mailer from '../mailer/index.js';
import resetPasswordMail from '../mailer/reset-password.js';
import welcomeMail from '../mailer/welcome-mail.js';
import { UserModel } from '../models/user-model.js';
import { VerifyUserModel } from '../models/verify-user-model.js';

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId).select('-password');
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Tên người dùng không tồn tại.' });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lấy thông tin thất bại.' });
  }
};

export const register = async (req, res) => {
  const { username, email, password, fullName } = req.body;
  if (!username || !email || !password || !fullName)
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng điền đầy đủ thông tin!' });
  if (username.includes(' '))
    return res.status(400).json({
      success: false,
      message: 'Tên người dùng không được phép có khoảng trắng.'
    });

  try {
    const user = await UserModel.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: 'Tên người dùng đã tồn tại' });
    const userEmail = await UserModel.findOne({ email });
    if (userEmail)
      return res
        .status(400)
        .json({ success: false, message: 'Email đã được đăng ký.' });
    const verifyUserEmail = await VerifyUserModel.findOne({ email });
    if (verifyUserEmail) await VerifyUserModel.findOneAndDelete({ email });

    const hashedPassword = await argon2.hash(password);
    const newUser = new VerifyUserModel({
      username,
      email,
      fullName,
      password: hashedPassword
    });
    await newUser.save();

    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '10m' }
    );
    const emailContent = activateMail(
      accessToken,
      newUser._id,
      newUser.username
    );
    mailer(email, emailContent);

    res.status(200).json({ success: true, message: 'Đăng ký thành công!' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Đăng ký thất bại.' });
  }
};

export const activate = async (req, res) => {
  const { token, id } = req.body;
  if (!token || !id)
    return res
      .status(400)
      .json({ success: false, message: 'Thiếu token hoặc ID' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.userId !== id)
      return res
        .status(400)
        .json({ success: false, message: 'Token hoặc ID không hợp lệ.' });
    const user = await VerifyUserModel.findOne({ _id: id });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Người dùng không tồn tại.' });

    const { username, email, password, fullName } = user;
    const newUser = new UserModel({ username, email, password, fullName });
    await newUser.save();

    const emailContent = welcomeMail();
    mailer(email, emailContent);
    await VerifyUserModel.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, message: 'Kích hoạt tài khoản thành công!' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Token không hợp lệ hoặc đã hết hạn.' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Thiếu tên người dùng hoặc mật khẩu.' });

  try {
    const user = await UserModel.findOne(
      username.includes('@') ? { email: username } : { username: username }
    );
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Người dùng không tồn tại.' });
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res.status(400).json({ success: false, message: 'Sai mật khẩu' });

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    res.status(200).json({ success: true, accessToken });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Đăng nhập thất bại.' });
  }
};

export const sendMailResetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res.status(400).json({ success: false, message: 'Vui lòng điền địa chỉ email!' });

  try {
    const verifyUserEmail = await UserModel.findOne({ email });
    if (!verifyUserEmail)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy địa chỉ email' });
    const accessToken = jwt.sign(
      { userId: verifyUserEmail._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '10m'
      }
    );

    const emailContent = resetPasswordMail(accessToken, verifyUserEmail._id);
    mailer(email, emailContent);
    res.status(200).json({ success: true, message: 'Đã gửi email xác nhận.' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Gửi email thất bại, hãy thử lại.' });
  }
};

export const resetPassword = async (req, res) => {
  const { token, id, password } = req.body;
  if (!token || !id || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng điền đày đủ thông tin!' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.userId !== id)
      return res
        .status(400)
        .json({ success: false, message: 'Token không hợp lệ hoặc đã hết hạn.' });
    const hashedPassword = await argon2.hash(password);
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { password: hashedPassword },
      { new: true }
    );
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Người dùng không tồn tại.' });

    const emailContent = welcomeMail();
    mailer(user.email, emailContent);
    res
      .status(200)
      .json({ success: true, message: 'Đặt lại mật khẩu thành công!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Đặt lại mật khẩu thất bại, hãy thử lại!'
    });
  }
};
