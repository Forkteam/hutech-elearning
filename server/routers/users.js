import express from 'express';
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  parseImportExcel,
  exportExcelTemplate
} from '../controllers/users.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';
import { upload } from '../middleware/check-file-excel.js';

const router = express.Router();

router.get('/:role', verifyToken, authTeacher, getUsers);
router.post(
  '/import-student',
  verifyToken,
  authTeacher,
  upload.single('file'),
  parseImportExcel
);
router.post(
  '/export-student-template',
  verifyToken,
  authTeacher,
  exportExcelTemplate
);
router.post('/:role', verifyToken, authTeacher, createUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, authTeacher, deleteUser);

export default router;
