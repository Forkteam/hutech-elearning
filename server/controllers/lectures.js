import _ from 'lodash';
import mailer from '../mailer/index.js';
import notificationMail from '../mailer/notification-mail.js';
import { CommentModel } from '../models/comment-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { SubjectModel } from '../models/subject-model.js';
import { UserModel } from '../models/user-model.js';

export const getLectures = async (req, res) => {
  try {
    const lectures = await LectureModel.find({
      subjectId: req.params.id
    }).populate('user', ['fullName']);
    res.status(200).json({ success: true, lectures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const getLectureDetail = async (req, res) => {
  try {
    const lecture = await LectureModel.findOne({
      _id: req.params.lectureId
    }).populate([
      {
        path: 'user',
        select: ['fullName']
      },
      {
        path: 'subjectId',
        select: ['name']
      }
    ]);
    res.status(200).json({ success: true, lecture });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const createLecture = async (req, res) => {
  const { title, url, subjectId, file } = req.body;
  if (!title || !file)
    return res.status(400).json({
      success: false,
      message: 'Tiêu đề hoặc file tài liệu đã bị bỏ trống.'
    });

  try {
    const newLecture = req.body;
    let newUrl;
    if (url !== undefined) {
      newUrl = `https://www.youtube.com/embed/${url.split('?v=')[1]}`;
    } else {
      newUrl = 'https://www.youtube.com/embed/sk0VynhUKVQ';
    }
    let lecture = new LectureModel({
      ...newLecture,
      url: newUrl,
      user: req.userId
    });
    await lecture.save();

    //send email to students in subject
    const subjectData = await SubjectModel.findById(subjectId);
    if (subjectData.studentIds) {
      const users = await UserModel.find({
        _id: { $in: subjectData.studentIds }
      });
      const emailContent = notificationMail(lecture._id);
      users.map((user) => {
        if (user.email) mailer(user.email, emailContent);
      });
    }

    lecture = await lecture.populate('user', ['fullName']);
    res.status(200).json({
      success: true,
      message: 'Tạo tài liệu thành công!',
      lecture
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const updateLecture = async (req, res) => {
  const { title, url } = req.body;
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: 'Tiêu đề tài liệu đã bị bỏ trống.' });

  try {
    const updateLecture = _.pickBy(req.body, _.identity);
    let newUrl;
    if (url !== undefined) {
      if (url.split('/')[3] === 'embed') newUrl = url;
      else newUrl = `https://www.youtube.com/embed/${url.split('?v=')[1]}`;
    } else {
      newUrl = 'https://www.youtube.com/embed/sk0VynhUKVQ';
    }
    const lecture = await LectureModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...updateLecture,
        url: newUrl
      },
      { new: true, omitUndefined: true }
    ).populate('user', ['fullName']);

    if (!lecture)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy tài liệu!' });

    res.status(200).json({
      success: true,
      message: 'Cập nhật tài liệu thành công!',
      lecture
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
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
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
