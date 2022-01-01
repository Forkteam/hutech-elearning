import express from 'express';
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser
} from '../controllers/users.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/:role', verifyToken, authTeacher, getUsers);
router.post('/:role', verifyToken, authTeacher, createUser);
router.put('/:id', verifyToken, authTeacher, updateUser);
router.delete('/:id', verifyToken, authTeacher, deleteUser);

export default router;
