import { CommentModel } from '../models/comment-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { SubjectModel } from '../models/subject-model.js';
import { PUBLIC } from '../enums/status.js';

export const getPublicSubjects = async (_, res) => {
  try {
    const subjects = await SubjectModel.find({ status: PUBLIC });
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getAllSubjects = async (_, res) => {
  try {
    const subjects = await SubjectModel.find().populate([
      {
        path: 'user',
        select: ['fullName']
      },
      {
        path: 'industryId',
        select: ['name']
      }
    ]);
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getStudentSubjects = async (req, res) => {
  try {
    const subjects = await SubjectModel.find({
      studentIds: req.params.id
    }).populate([
      {
        path: 'user',
        select: ['fullName']
      },
      {
        path: 'industryId',
        select: ['name']
      }
    ]);
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getTeacherSubjects = async (req, res) => {
  try {
    const subjects = await SubjectModel.find({ user: req.params.id }).populate([
      {
        path: 'user',
        select: ['fullName']
      },
      {
        path: 'industryId',
        select: ['name']
      }
    ]);
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getSubjectDetail = async (req, res) => {
  try {
    let subject = await SubjectModel.findById(req.params.id).populate('user', [
      'fullName'
    ]);
    let checkSubscribe = new Promise((resolve, _) => {
      subject.studentIds.forEach((item) => {
        if (item.toString() === req.userId) resolve(true);
      });
      resolve(false);
    });
    const isSubscribe = await checkSubscribe;
    subject = { ...subject._doc, isSubscribe };
    return res.status(200).json({ success: true, subject });
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
    let subject = new SubjectModel({
      ...subjectInput,
      user: req.userId
    });
    await subject.save();
    subject = await subject.populate([
      {
        path: 'user',
        select: ['fullName']
      },
      {
        path: 'industryId',
        select: ['name']
      }
    ]);
    return res.status(200).json({
      success: true,
      message: 'Create subject success',
      subject
    });
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
    ).populate('user', ['fullName']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy môn học!' });

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
        .json({ success: false, message: 'Không tìm thấy môn học!' });

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

export const addStudent = async (req, res) => {
  try {
    let updatedSubject = await SubjectModel.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { studentIds: req.userId } },
      { new: true }
    ).populate('user', ['fullName']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy môn học!' });
    updatedSubject = { ...updatedSubject._doc, isSubscribe: true };
    return res.status(200).json({
      success: true,
      message: 'Subscribe success',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const removeStudent = async (req, res) => {
  try {
    let updatedSubject = await SubjectModel.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { studentIds: req.userId } },
      { new: true }
    ).populate('user', ['fullName']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy môn học!' });
    updatedSubject = { ...updatedSubject._doc, isSubscribe: false };
    return res.status(200).json({
      success: true,
      message: 'Unsubscribe success',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
