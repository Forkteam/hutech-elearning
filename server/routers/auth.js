import express from 'express';
import {
  activate,
  contact,
  getUser,
  login,
  register,
  resetPassword,
  sendMailResetPassword
} from '../controllers/auth.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getUser);
router.post('/contact', contact);
router.post('/register', register);
router.post('/activate', activate);
router.post('/login', login);
router.post('/send-mail-reset-password', sendMailResetPassword);
router.post('/reset-password', resetPassword);

export default router;
