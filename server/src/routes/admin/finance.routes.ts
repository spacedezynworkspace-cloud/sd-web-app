import express from 'express';
import {
  getFinanceAnalytics,
  getMonthlyCashflow,
  getOutstandingByProject,
} from '../../controllers/admin/finance.controllers';

const router = express.Router();

router.get('/analytics', getFinanceAnalytics);
router.get('/monthly-cashflow', getMonthlyCashflow);
router.get('/outstanding-by-project', getOutstandingByProject);

export default router;
