import express from 'express';
import {
  createIndustry,
  deleteIndustry,
  getIndustries,
  updateIndustry
} from '../controllers/industries.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getIndustries);
router.post('/', verifyToken, authTeacher, createIndustry);
router.put('/:id', verifyToken, authTeacher, updateIndustry);
router.delete('/:id', verifyToken, authTeacher, deleteIndustry);

export default router;
