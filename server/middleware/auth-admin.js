import { UserModel } from '../models/user-model.js';

const authAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });
    if (user.role < 3)
      return res
        .status(403)
        .json({
          success: false,
          message: 'Quyền truy cập tài nguyên quản trị viên cấp cao bị từ chối.'
        });

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ' });
  }
};

export default authAdmin;
