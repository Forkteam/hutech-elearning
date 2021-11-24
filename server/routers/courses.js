import express from 'express';
import {
  addStudent,
  createCourses,
  deleteCourses,
  getAllCourses,
  getCoursesDetail,
  getStudentCourses,
  getTeacherCourses,
  inviteStudentJoinCourses,
  removeStudent,
  updateCourses
} from '../controllers/courses.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/all-courses', verifyToken, getAllCourses);
router.get('/student-courses', verifyToken, getStudentCourses);
router.get('/teacher-courses', verifyToken, getTeacherCourses);
router.get('/:id', verifyToken, getCoursesDetail);
router.post('/', verifyToken, authTeacher, createCourses);
router.put('/:id', verifyToken, authTeacher, updateCourses);
router.post(
  '/:id/invite-student',
  verifyToken,
  authTeacher,
  inviteStudentJoinCourses
);
router.post('/:id/add-student', verifyToken, addStudent);
router.post('/:id/remove-student', verifyToken, authTeacher, removeStudent);
router.delete('/:id', verifyToken, authTeacher, deleteCourses);

export default router;
