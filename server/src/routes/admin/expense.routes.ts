import express from 'express';
import {
  updateExpenseStatus,
  createExpense,
  getAllExpenses,
  getExpensesByType,
} from '../../controllers/admin/expense.controllers';
const router = express.Router();

router.post('/', createExpense);
router.get('/', getAllExpenses);
router.get('/expenses-by-type', getExpensesByType);
router.patch('/:id/update-expense-status', updateExpenseStatus);

export default router;
