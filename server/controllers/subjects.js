import mailer from '../mailer/index.js';
import inviteStudent from '../mailer/invite-mail.js';
import { SubjectModel } from '../models/subject-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { UserModel } from '../models/user-model.js';
import { CommentModel } from '../models/comment-model.js';

export const getAllSubjects = async (_, res) => {
  try {
    const subjects = await SubjectModel.find().populate('user', ['username']);
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getStudentSubjects = async (req, res) => {
  try {
    const subjects = await SubjectModel.find({
      studentIds: req.body.id
    }).populate('user', ['username']);
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getTeacherSubjects = async (req, res) => {
  try {
    const subjects = await SubjectModel.find({ user: req.body.id }).populate(
      'user',
      ['username']
    );
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getSubjectDetail = async (req, res) => {
  try {
    const subjectDetail = await SubjectModel.findById(id).populate('user', [
      'username'
    ]);
    return res.status(200).json({ success: true, subjectDetail });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createSubject = async (req, res) => {
  const { name, description, image, industryId } = req.body;
  if (!name || !description || !image || !industryId)
    return res.status(400).json({
      success: false,
      message: 'Missing name/description/image/industryId'
    });
  try {
    const subjectInput = req.body;
    const newSubject = new SubjectModel({
      ...subjectInput,
      user: req.userId
    });
    await newSubject.save();
    return res
      .status(200)
      .json({ success: true, message: 'Create subject success', newSubject });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateSubject = async (req, res) => {
  const { name, description, image } = req.body;
  if (!name || !description || !image)
    return res
      .status(400)
      .json({ success: false, message: 'Missing name/description/image' });
  try {
    const subjectInput = req.body;
    const updatedSubject = await SubjectModel.findOneAndUpdate(
      { _id: id },
      subjectInput,
      { new: true }
    ).populate('user', ['username']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Subject not found' });

    return res.status(200).json({
      success: true,
      message: 'Update subject success',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteSubject = async (req, res) => {
  if (!id)
    return res
      .status(400)
      .json({ success: false, message: 'Missing subject id' });

  try {
    const deletedSubject = await SubjectModel.findOneAndDelete({ _id: id });
    if (!deletedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Subject not found' });

    const lectures = await LectureModel.find({ subjectId: id });
    let lectureIds = [];
    lectures.forEach((lecture) => {
      lectureIds.push(lecture._id);
    });
    await Promise.all([
      LectureModel.deleteMany({ subjectId: id }),
      CommentModel.deleteMany({ lectureId: { $in: lectureIds } })
    ]);

    return res.status(200).json({
      success: true,
      message: 'Delete subject success',
      deletedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const inviteStudentJoinSubject = async (req, res) => {
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

    const updatedSubject = await SubjectModel.findOneAndUpdate(
      { _id: id },
      { $addToSet: { studentIds: studentId } },
      { new: true }
    ).populate('user', ['username']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Subject not found' });
    return res.status(200).json({
      success: true,
      message: 'Update student success',
      updatedSubject
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

    const updatedSubject = await SubjectModel.findOneAndUpdate(
      { _id: id },
      { $pull: { studentIds: studentId } },
      { new: true }
    ).populate('user', ['username']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Subject not found' });

    return res.status(200).json({
      success: true,
      message: 'Remove student success',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
