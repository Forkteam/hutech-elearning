import express from 'express';
import verifyToken from '../middleware/auth.js';
import {
  getUser,
  register,
  activate,
  login,
  sendMailResetPassword,
  resetPassword
} from '../controllers/auth.js';

const router = express.Router();

router.get('/', verifyToken, getUser);
router.post('/register', register);
router.post('/activate', activate);
router.post('/login', login);
router.post('/send-mail-reset-password', sendMailResetPassword);
router.post('/reset-password', resetPassword);

export default router;
