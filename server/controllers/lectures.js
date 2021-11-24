import mailer from '../mailer/index.js';
import notificationMail from '../mailer/notification-mail.js';
import { CoursesModel } from '../models/courses-model.js';
import { LectureModel } from '../models/lecture-model.js';
import { UserModel } from '../models/user-model.js';

export const getLectures = async (req, res) => {
  try {
    const lectures = await LectureModel.find({
      coursesId: req.params.id
    }).populate('user', ['username']);
    res.status(200).json({ success: true, lectures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createLecture = async (req, res) => {
  const { title, url, coursesId } = req.body;
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

    //send email to students in courses
    const coursesData = await CoursesModel.findById(coursesId);
    const users = await UserModel.find({
      _id: { $in: coursesData.studentIds }
    });
    const emailContent = notificationMail(lecture._id, lecture.coursesId);
    users.map((user) => {
      if (user.email) mailer(user.email, emailContent);
    });

    lecture = await LectureModel.findById(lecture._id).populate('user', [
      'username'
    ]);
    res
      .status(200)
      .json({ success: true, message: 'Create lecture success', lecture });
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
        .json({ success: false, message: 'Lecture not found' });

    res
      .status(200)
      .json({ success: true, message: 'Update lecture success', lecture });
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
        .json({ success: false, message: 'Lecture not found' });

    res
      .status(200)
      .json({ success: true, message: 'Delete lecture success', lecture });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
