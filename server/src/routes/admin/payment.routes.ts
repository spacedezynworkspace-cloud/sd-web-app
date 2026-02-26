import express from 'express';
import {
  createPayment,
  getAllPayments,
} from '../../controllers/admin/payment.controllers';

const router = express.Router();

router.post('/', createPayment);
router.get('/', getAllPayments);

export default router;
