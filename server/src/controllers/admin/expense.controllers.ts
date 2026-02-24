import { Request, Response } from 'express';
import { Expense } from '../../models/expense.models';

// Create expense
export const createExpense = async (req: Request, res: Response) => {
  console.log('req body: ', req.body);

  const expense = await Expense.create({
    ...req.body,
  });
  res.status(201).json({
    message: 'Expense created successfully',
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

// Toggle Expenses
// export const toggleExpenseApproval = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     // const expense = await Expense.findByIdAndUpdate(
//     //   id,
//     //   [
//     //     {
//     //       $set: {
//     //         approved: { $not: '$approved' }, // 🔥 atomic toggle
//     //         // approvedBy: req.user.id,
//     //         // approvedAt: new Date(),
//     //       },
//     //     },
//     //   ],
//     //   { new: true }
//     // );
//     const expense = await Expense.findByIdAndUpdate(
//       id,
//       {
//         $bit: { approved: { xor: 1 } }, // 🔥 atomic toggle without pipeline
//       },
//       { new: true }
//     );

//     if (!expense) {
//       return res.status(404).json({
//         success: false,
//         message: 'Expense not found',
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: `Expense ${
//         expense.approved ? 'approved' : 'declined'
//       } successfully`,
//       data: expense,
//     });
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       success: false,
//       message: 'An error occurred, try again',
//     });
//   }
// };
export const updateExpenseStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const allowedStatuses = ['pending', 'approved', 'declined'];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value',
      });
    }

    const expense = await Expense.findByIdAndUpdate(
      id,
      { $set: { status, opened: true } },
      { returnDocument: 'after' } // replaces new: true
    );

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Expense not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: `Expense marked as ${status}`,
      data: expense,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'An error occurred, try again',
    });
  }
};
