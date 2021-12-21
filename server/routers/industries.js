import express from 'express';
import {
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry
} from '../controllers/industries.js';
import verifyToken from '../middleware/auth.js';
import authTeacher from '../middleware/auth-teacher.js';

const router = express.Router();

router.get('/', verifyToken, getIndustries);
router.post('/', verifyToken, authTeacher, createIndustry);
router.put('/:id', verifyToken, authTeacher, updateIndustry);
router.delete('/:id', verifyToken, authTeacher, deleteIndustry);

export default router;
