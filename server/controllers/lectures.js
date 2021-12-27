import mailer from '../mailer/index.js';
import notificationMail from '../mailer/notification-mail.js';
import { SubjectModel } from '../models/subject-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { UserModel } from '../models/user-model.js';
import { CommentModel } from '../models/comment-model.js';

export const getLectures = async (req, res) => {
  try {
    const lectures = await LectureModel.find({
      subjectId: req.params.id
    }).populate('user', ['username']);
    res.status(200).json({ success: true, lectures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createLecture = async (req, res) => {
  const { title, url, subjectId } = req.body;
  if (!title)
    return res.status(400).json({ success: false, message: 'Missing title' });

  try {
    const newLecture = req.body;
    let lecture = new LectureModel({
      ...newLecture,
      url: url.startsWith('https://') ? url : `https://${url}`,
      user: req.userId
    });
    await lecture.save();

    //send email to students in subject
    const subjectData = await SubjectModel.findById(subjectId);
    const users = await UserModel.find({
      _id: { $in: subjectData.studentIds }
    });
    const emailContent = notificationMail(lecture._id, lecture.subjectId);
    users.map((user) => {
      if (user.email) mailer(user.email, emailContent);
    });

    lecture = await LectureModel.findById(lecture._id).populate('user', [
      'username'
    ]);
    res
      .status(200)
      .json({ success: true, message: 'Tạo mới tài liệu thành công!', lecture });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateLecture = async (req, res) => {
  const { title, url } = req.body;
  if (!title)
    return res.status(400).json({ success: false, message: 'Missing title' });

  try {
    const updateLecture = req.body;
    const lecture = await LectureModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...updateLecture,
        user: req.userId,
        url: url.startsWith('https://') ? url : `https://${url}`
      },
      { new: true }
    ).populate('user', ['username']);

    if (!lecture)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy tài liệu!' });

    res
      .status(200)
      .json({ success: true, message: 'Cập nhật tài liệu thành công!', lecture });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteLecture = async (req, res) => {
  try {
    const lecture = await LectureModel.findOneAndDelete({ _id: req.params.id });

    if (!lecture)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy tài liệu!' });

    await CommentModel.deleteMany({ lectureId: req.params.id });

    res
      .status(200)
      .json({ success: true, message: 'Xoá thành công!', lecture });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
