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
        .json({ success: false, message: 'User not found' });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Get user fail' });
  }
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: 'One or more fields is empty' });
  if (username.includes(' '))
    return res
      .status(400)
      .json({ success: false, message: 'Username must not have white space' });

  try {
    const user = await UserModel.findOne({ username });
    if (user)
      return res.status(400).json({ success: false, message: 'User exist' });
    const userEmail = await UserModel.findOne({ email });
    if (userEmail)
      return res
        .status(400)
        .json({ success: false, message: 'Email registered' });
    const verifyUserEmail = await VerifyUserModel.findOne({ email });
    if (verifyUserEmail) await VerifyUserModel.findOneAndDelete({ email });

    const hashedPassword = await argon2.hash(password);
    const newUser = new VerifyUserModel({
      username,
      email,
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

    res.status(200).json({ success: true, message: 'Register success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Register fail' });
  }
};

export const activate = async (req, res) => {
  const { token, id } = req.body;
  if (!token || !id)
    return res
      .status(400)
      .json({ success: false, message: 'Missing token or ID' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.userId !== id)
      return res
        .status(400)
        .json({ success: false, message: 'Token or ID invalid' });
    const user = await VerifyUserModel.findOne({ _id: id });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });

    const { username, email, password, fullName } = user;
    const newUser = new UserModel({ username, email, password, fullName });
    await newUser.save();

    const emailContent = welcomeMail();
    mailer(email, emailContent);
    await VerifyUserModel.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, message: 'Activate success' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Token invalid or expire' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Missing username or password' });

  try {
    const user = await UserModel.findOne(
      username.includes('@') ? { email: username } : { username: username }
    );
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: 'Wrong password' });

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    res.status(200).json({ success: true, accessToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Login fail' });
  }
};

export const sendMailResetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res.status(400).json({ success: false, message: 'Missing email' });

  try {
    const verifyUserEmail = await UserModel.findOne({ email });
    if (!verifyUserEmail)
      return res
        .status(404)
        .json({ success: false, message: 'Email not found' });
    const accessToken = jwt.sign(
      { userId: verifyUserEmail._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '10m'
      }
    );

    const emailContent = resetPasswordMail(accessToken, verifyUserEmail._id);
    mailer(email, emailContent);
    res.status(200).json({ success: true, message: 'Send mail success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Send mail fail' });
  }
};

export const resetPassword = async (req, res) => {
  const { token, id, password } = req.body;
  if (!token || !id || !password)
    return res
      .status(400)
      .json({ success: false, message: 'One or more fields is empty' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.userId !== id)
      return res
        .status(400)
        .json({ success: false, message: 'Token invalid or expire' });
    const hashedPassword = await argon2.hash(password);
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { password: hashedPassword },
      { new: true }
    );
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });

    const emailContent = welcomeMail();
    mailer(user.email, emailContent);
    res.status(200).json({ success: true, message: 'Reset password success' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Reset password fail' });
  }
};
