import { CommentModel } from '../models/comment-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { SubjectModel } from '../models/subject-model.js';
import { PUBLIC } from '../enums/status.js';

export const getPublicSubjects = async (_, res) => {
  try {
    const subjects = await SubjectModel.find({ status: PUBLIC }).limit(8);
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const getAllPublicSubjects = async (_, res) => {
  try {
    const subjects = await SubjectModel.find({ status: PUBLIC });
    return res.status(200).json({ success: true, subjects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
      message: 'Thêm môn học thành công.!',
      subject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const updateSubject = async (req, res) => {
  const { name, description, image, id } = req.body;
  if (!name || !description || !image)
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng điền đầy đủ thông tin.' });
  try {
    const subjectInput = req.body;
    const updatedSubject = await SubjectModel.findOneAndUpdate(
      { _id: id },
      subjectInput,
      { new: true, omitUndefined: true }
    ).populate('user', ['fullName']);
    if (!updatedSubject)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy môn học!' });

    return res.status(200).json({
      success: true,
      message: 'Cập nhật môn học thành công.!',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const deleteSubject = async (req, res) => {
  if (!id)
    return res
      .status(400)
      .json({ success: false, message: 'Mã môn học đã bị bỏ trống.' });

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
      message: 'Xoá môn học thành công.!',
      deletedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
      message: 'Đăng ký thành công.!',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
      message: 'Huỳ đăng ký thành công.!',
      updatedSubject
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
