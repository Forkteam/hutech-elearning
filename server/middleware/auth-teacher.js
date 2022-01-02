import { UserModel } from '../models/user-model.js';

const authTeacher = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });
    if (user.role < 2)
      return res
        .status(403)
        .json({
          success: false,
          message: 'Quyền truy cập tài nguyên quản trị viên bị từ chối.'
        });
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, message: 'Lỗi máy chủ' });
  }
};

export default authTeacher;
