import { UserModel } from '../models/user-model.js';

const authAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });
    if (user.role < 3)
      return res
        .status(403)
        .json({ success: false, message: 'Admin resources access denied.' });

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export default authAdmin;
