import express from 'express';
import {
  createRequest,
  getRequests,
  updateRequest,
  createPayment,
  vnpayReturn
  // vnpayIpn
} from '../controllers/requests.js';
import authTeacher from '../middleware/auth-teacher.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getRequests);
router.post('/', verifyToken, createRequest);
router.put('/:id', verifyToken, authTeacher, updateRequest);
router.post('/create_payment_url', verifyToken, createPayment);
router.get('/vnpay_return', vnpayReturn);
// router.get('/vnpay_ipn', vnpayIpn);

export default router;
