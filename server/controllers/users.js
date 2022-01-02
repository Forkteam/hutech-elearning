import argon2 from 'argon2';
import fs from 'fs';
import _ from 'lodash';
import Excel from 'exceljs';
import path from 'path';
import xlsx from 'xlsx';
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
    const updateUser = _.pickBy(req.body, _.identity);
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

export const parseImportExcel = async (req, res) => {
  if (!req.file)
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin!' });

  try {
    const workbook = xlsx.readFile(req.file.path);
    const json = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]]
    );
    await fs.promises.unlink(req.file.path);
    let flag = null;
    await Promise.all(
      json.map(async (item) => {
        const { code, email, username } = item;
        const validUsername = await UserModel.findOne({ username });
        const validCode = await UserModel.findOne({ code });
        const validEmail = await UserModel.findOne({ email });

        if (!code || !email || !username) flag = json.indexOf(item);
        else if (validUsername) flag = json.indexOf(item);
        else if (validCode) flag = json.indexOf(item);
        else if (validEmail) flag = json.indexOf(item);
      })
    );
    if (flag !== null)
      return res.status(400).json({
        success: false,
        message: `Tài khoản số ${
          flag + 1
        } bị trùng dữ liệu đã có trong CSDL. Vui lòng kiểm tra lại file excel !`
      });

    const jsonHashed = await Promise.all(
      json.map(async (item) => ({
        ...item,
        password: await argon2.hash(item.password.toString())
      }))
    );
    const users = await UserModel.insertMany(jsonHashed);
    res.status(200).json({
      success: true,
      message: 'Nhập danh sách sinh viên thành công',
      users
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const exportExcelTemplate = async (_, res) => {
  try {
    var workbook = new Excel.Workbook();
    const filepath = path.join(
      path.resolve(),
      './uploads/student-template.xlsx'
    );
    await workbook.xlsx.readFile(filepath).then(function () {
      res.status(200).download(filepath);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
