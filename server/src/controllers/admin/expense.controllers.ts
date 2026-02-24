import { Request, Response } from 'express';
import { Expense } from '../../models/expense.models';

// Create expense
export const createExpense = async (req: Request, res: Response) => {
  const expense = await Expense.create({
    ...req.body,
  });
  res.status(201).json({
    message: 'Project created successfully',
    success: true,
    data: expense,
  });
};

// Get expenses
export const getAllExpenses = async (_req: Request, res: Response) => {
  const expenses = await Expense.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    message: 'Fecth all expenses successful',
    data: expenses,
  });
};
// Get Expenses by type
export const getExpensesByType = async (_req: Request, res: Response) => {
  try {
    const expenses = await Expense.aggregate([
      {
        $group: {
          _id: '$type',
          total: { $sum: '$amount' },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: expenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch expenses by type',
    });
  }
};
