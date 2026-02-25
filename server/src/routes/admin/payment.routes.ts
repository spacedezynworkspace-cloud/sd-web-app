import express from 'express';
import { createPayment } from '../../controllers/admin/payment.controllers';

const router = express.Router();

router.post('/', createPayment);

export default router;
