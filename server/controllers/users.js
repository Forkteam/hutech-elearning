import argon2 from 'argon2';
import { SubjectModel } from '../models/subject-model.js';
import { UserModel } from '../models/user-model.js';

export const getUsers = async (req, res) => {
  const { role } = req.params;
  try {
    let users;
    if (role === '1') {
      users = await UserModel.find({ role }).populate('user', ['fullName']);
    } else {
      users = await UserModel.find({ role: { $in: [2, 3] } }).populate('user', [
        'fullName'
      ]);
    }
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng điền đầy đủ thông tin.' });

  try {
    const validUsername = await UserModel.findOne({
      $and: [{ _id: { $ne: req.params.id } }, { username }]
    });
    if (validUsername)
      return res
        .status(400)
        .json({ success: false, message: 'Tên người dùng đã tồn tại.' });
    if (req.body.email) {
      const { email } = req.body;
      const validEmail = await UserModel.findOne({
        $and: [{ _id: { $ne: req.params.id } }, { email }]
      });
      if (validEmail)
        return res.status(400).json({
          success: false,
          message: 'Email này đã được đăng ký trước đó.'
        });
    }

    const newUser = req.body;
    const hashedPassword = await argon2.hash(password);
    let user = new UserModel({
      ...newUser,
      password: hashedPassword,
      role: req.params.role,
      user: req.userId
    });
    await user.save();

    user = await user.populate('user', ['fullName']);
    res
      .status(200)
      .json({ success: true, message: 'Tạo tài khoản thành công', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const updateUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const validEmail = await UserModel.findOne({
      $and: [{ _id: { $ne: req.params.id } }, { email }]
    });
    if (validEmail)
      return res.status(400).json({
        success: false,
        message: 'Email này đã được đăng ký trước đó.'
      });
    const validUsername = await UserModel.findOne({
      $and: [{ _id: { $ne: req.params.id } }, { username }]
    });
    if (validUsername)
      return res.status(400).json({
        success: false,
        message: 'Tên người dùng đã được đăng ký trước đó.'
      });
    const validUser = await UserModel.findOne({ _id: req.params.id });
    if (!validUser)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy người dùng.' });

    const updateUser = req.body;
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      updateUser,
      { new: true, omitUndefined: true }
    ).populate('user', ['fullName']);
    res.status(200).json({
      success: true,
      message: 'Cập nhật người dùng thành công.!',
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOneAndDelete({ _id: id });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy người dùng.' });

    await SubjectModel.updateMany(
      { studentIds: id },
      { $pull: { studentIds: id } },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: 'Xoá người dùng thành công.!', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
