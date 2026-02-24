import express from 'express';
import {
  getExpensesByType,
  getFinanceOverview,
  getMonthlyCashflow,
} from '../../controllers/admin/finance.controllers';

const router = express.Router();

router.get('/overview', getFinanceOverview);
router.get('/monthly-cashflow', getMonthlyCashflow);
router.get('/expenses-by-type', getExpensesByType);
router.get('/outstanding-by-project', getExpensesByType);
