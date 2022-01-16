import express from 'express';
import {
  createRequest,
  getRequests,
  updateRequest
} from '../controllers/requests.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getRequests);
router.post('/', verifyToken, createRequest);
router.put('/:id', verifyToken, authTeacher, updateRequest);

export default router;
