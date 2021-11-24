import { UserModel } from '../models/user-model.js';

const authTeacher = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });
    if (user.role < 2)
      return res
        .status(403)
        .json({ success: false, message: 'Teacher resources access denied.' });
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, message: 'Server error' });
  }
};

export default authTeacher;
