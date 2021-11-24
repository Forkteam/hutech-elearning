import express from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/users.js';
import verifyToken from '../middleware/auth.js';
import authAdmin from '../middleware/auth-admin.js';
import authTeacher from '../middleware/auth-teacher.js';

const router = express.Router();

router.get('/:role', verifyToken, authTeacher, getUsers);
router.post('/:role', verifyToken, authAdmin, createUser);
router.put('/:id', verifyToken, authAdmin, updateUser);
router.delete('/:id', verifyToken, authAdmin, deleteUser);

export default router;
