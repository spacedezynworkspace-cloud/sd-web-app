import express from 'express';
import {
  createExpense,
  getAllExpenses,
  getExpensesByType,
} from '../../controllers/admin/expense.controllers';
const router = express.Router();

router.post('/', createExpense);
router.get('/', getAllExpenses);
router.get('/expenses-by-type', getExpensesByType);

export default router;
