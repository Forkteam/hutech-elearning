import express from 'express';
import {
  createComment,
  deleteComment,
  getComments,
  updateComment
} from '../controllers/comments.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', verifyToken, getComments);
router.post('/', verifyToken, createComment);
router.put('/:id', verifyToken, updateComment);
router.delete('/:id', verifyToken, deleteComment);

export default router;
