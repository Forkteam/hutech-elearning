import express from 'express';
import {
  getRequests,
  createRequest,
  updateRequest
} from '../controllers/requests.js';
import verifyToken from '../middleware/auth.js';
import authTeacher from '../middleware/auth-teacher.js';

const router = express.Router();

router.get('/', verifyToken, getRequests);
router.post('/', verifyToken, createRequest);
router.put('/:id', verifyToken, authTeacher, updateRequest);

export default router;
