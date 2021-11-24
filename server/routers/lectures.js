import express from 'express';
import {
  getLectures,
  createLecture,
  updateLecture,
  deleteLecture
} from '../controllers/lectures.js';
import verifyToken from '../middleware/auth.js';
import authTeacher from '../middleware/auth-teacher.js';

const router = express.Router();

router.get('/:id', verifyToken, getLectures);
router.post('/', verifyToken, authTeacher, createLecture);
router.put('/:id', verifyToken, authTeacher, updateLecture);
router.delete('/:id', verifyToken, authTeacher, deleteLecture);

export default router;
