import argon2 from 'argon2';
import { CoursesModel } from '../models/courses-model.js';
import { UserModel } from '../models/user-model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({ role: req.params.role }).populate(
      'user',
      ['username']
    );
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const createUser = async (req, res) => {
  const { code, username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'One or more fields is empty' });

  try {
    const validUsername = await UserModel.findOne({ username });
    if (validUsername)
      return res
        .status(400)
        .json({ success: false, message: 'Username exist' });
    if (code !== '') {
      const validCode = await UserModel.findOne({ code });
      if (validCode)
        return res.status(400).json({ success: false, message: 'Code exist' });
    }
    if (req.body.email) {
      const { email } = req.body;
      const validEmail = await UserModel.findOne({ email });
      if (validEmail)
        return res
          .status(400)
          .json({ success: false, message: 'Email registered' });
    }

    const newUser = req.body;
    const hashedPassword = await argon2.hash(password);
    var user = new UserModel({
      ...newUser,
      password: hashedPassword,
      role: req.params.role,
      user: req.userId
    });
    await user.save();

    user = await UserModel.findById(user._id).populate('user', ['username']);
    res
      .status(200)
      .json({ success: true, message: 'Create user success', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateUser = async (req, res) => {
  const { code, username, email } = req.body;
  try {
    const validUser = await UserModel.findById(req.params.id);
    if (validUser.email !== email) {
      const validEmail = await UserModel.findOne({ email });
      if (validEmail)
        return res
          .status(400)
          .json({ success: false, message: 'Email registered' });
    } else if (validUser.username !== username) {
      const validUsername = await UserModel.findOne({ username });
      if (validUsername)
        return res
          .status(400)
          .json({ success: false, message: 'Username registered' });
    } else if (validUser.code !== code) {
      const validCode = await UserModel.findOne({ code });
      if (validCode)
        return res
          .status(400)
          .json({ success: false, message: 'Code registered' });
    }

    const updateUser = req.body;
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...updateUser, user: req.userId },
      { new: true }
    ).populate('user', ['username']);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    res
      .status(200)
      .json({ success: true, message: 'Update user success', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOneAndDelete({ _id: id });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });

    await CoursesModel.updateMany(
      { studentIds: id },
      { $pull: { studentIds: id } },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: 'Delete user success', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
