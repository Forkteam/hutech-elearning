import express from 'express';
import {
  addStudent,
  createSubject,
  deleteSubject,
  getAllSubjects,
  getStudentSubjects,
  getSubjectDetail,
  getTeacherSubjects,
  removeStudent,
  updateSubject
} from '../controllers/subjects.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/all-subjects', verifyToken, getAllSubjects);
router.get('/student-subjects', verifyToken, getStudentSubjects);
router.get('/teacher-subjects', verifyToken, getTeacherSubjects);
router.get('/:id', verifyToken, getSubjectDetail);
router.post('/', verifyToken, authTeacher, createSubject);
router.put('/:id', verifyToken, authTeacher, updateSubject);
router.post('/:id/add-student', verifyToken, addStudent);
router.post('/:id/remove-student', verifyToken, removeStudent);
router.delete('/:id', verifyToken, authTeacher, deleteSubject);

export default router;
