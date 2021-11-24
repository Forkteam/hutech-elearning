import mailer from '../mailer/index.js';
import inviteStudent from '../mailer/invite-mail.js';
import { CoursesModel } from '../models/courses-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { UserModel } from '../models/user-model.js';

export const getAllCourses = async (_, res) => {
  try {
    const courses = await CoursesModel.find().populate('user', ['username']);
    return res.status(200).json({ success: true, courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getStudentCourses = async (req, res) => {
  try {
    const courses = await CoursesModel.find({
      studentIds: req.body.id
    }).populate('user', ['username']);
    return res.status(200).json({ success: true, courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getTeacherCourses = async (req, res) => {
  try {
    const courses = await CoursesModel.find({ user: req.body.id }).populate(
      'user',
      ['username']
    );
    return res.status(200).json({ success: true, courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getCoursesDetail = async (req, res) => {
  try {
    const coursesDetail = await CoursesModel.findById(id).populate('user', [
      'username'
    ]);
    return res.status(200).json({ success: true, coursesDetail });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createCourses = async (req, res) => {
  const { code } = req.body;
  if (!code)
    return res.status(400).json({ success: false, message: 'Missing code' });
  try {
    const coursesInput = req.body;
    const newCourses = new CoursesModel({ ...coursesInput, user: req.userId });
    await newCourses.save();
    return res
      .status(200)
      .json({ success: true, message: 'Create courses success', newCourses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateCourses = async (req, res) => {
  const { code } = req.body;
  if (!code)
    return res.status(400).json({ success: false, message: 'Missing code' });
  try {
    const existingCourses = await CoursesModel.findById(id);
    if (!existingCourses)
      return res
        .status(404)
        .json({ success: false, message: 'Courses not found' });

    const userRole = await UserModel.findById(req.userId);
    if (userRole.role < 3 && existingCourses.user !== userRole._id)
      return res
        .status(403)
        .json({ success: false, message: 'Permission denied' });

    const coursesInput = req.body;
    const updatedCourses = await CoursesModel.findOneAndUpdate(
      { _id: id },
      coursesInput,
      { new: true }
    ).populate('user', ['username']);

    return res.status(200).json({
      success: true,
      message: 'Update courses success',
      updatedCourses
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteCourses = async (req, res) => {
  if (!id)
    return res
      .status(400)
      .json({ success: false, message: 'Missing courses id' });

  try {
    const deletedCourses = await CoursesModel.findOneAndDelete({ _id: id });
    if (!deletedCourses)
      return res
        .status(404)
        .json({ success: false, message: 'Courses not found' });

    await LectureModel.deleteMany({ coursesId: id });

    return res.status(200).json({
      success: true,
      message: 'Delete courses success',
      deletedCourses
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const inviteStudentJoinCourses = async (req, res) => {
  const { studentId, id } = req.body;
  if (!studentId || !id)
    return res
      .status(400)
      .json({ success: false, message: 'One or more fields is empty' });

  try {
    const user = await UserModel.findById(studentId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Student not found' });
    if (!user.email)
      return res
        .status(404)
        .json({ success: false, message: "Student doesn't have email!" });

    const inviteToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    const emailContent = inviteStudent(inviteToken, id, user._id);
    mailer(user.email, emailContent);
    return res
      .status(200)
      .json({ success: true, message: 'Invite student success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const addStudent = async (req, res) => {
  const { token, studentId, id } = req.body;
  if (!token || !studentId || !id)
    return res
      .status(400)
      .json({ success: false, message: 'One or more fields is empty' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded.userId !== studentId)
      return res.status(401).json({ success: false, message: 'Invalid token' });
    const user = await UserModel.findById(studentId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Student not found' });

    const updatedCourses = await CoursesModel.findOneAndUpdate(
      { _id: id },
      { $addToSet: { studentIds: studentId } },
      { new: true }
    ).populate('user', ['username']);
    if (!updatedCourses)
      return res
        .status(404)
        .json({ success: false, message: 'Courses not found' });
    return res.status(200).json({
      success: true,
      message: 'Update student success',
      updatedCourses
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
export const removeStudent = async (req, res) => {
  const { studentId, id } = req.body;
  if (!studentId || !id)
    return res
      .status(400)
      .json({ success: false, message: 'One or more fields is empty' });

  try {
    const user = await UserModel.findById(studentId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'Student not found' });

    const updatedCourses = await CoursesModel.findOneAndUpdate(
      { _id: id },
      { $pull: { studentIds: studentId } },
      { new: true }
    ).populate('user', ['username']);
    if (!updatedCourses)
      return res
        .status(404)
        .json({ success: false, message: 'Courses not found' });

    return res.status(200).json({
      success: true,
      message: 'Remove student success',
      updatedCourses
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
