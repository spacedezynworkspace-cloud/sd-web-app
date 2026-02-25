import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Project from '../../models/project.models';
import { Payment } from '../../models/payment.models';

export const createPayment = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // const { projectId, amount, method, paymentDate } = req.body;
    const { projectId, amount, method, notes } = req.body;

    if (!amount || amount <= 0) {
      throw new Error('Invalid payment amount');
    }

    const project = await Project.findById(projectId).session(session);
    if (!project) {
      throw new Error('Project not found');
    }

    // 1️⃣ Get current total paid BEFORE inserting new payment
    const paymentsAgg = await Payment.aggregate(
      [
        { $match: { project: project._id } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ],
      { session }
    );

    const totalPaid = paymentsAgg[0]?.total || 0;

    // 2️⃣ Prevent overpayment
    if (totalPaid + amount > project.budget) {
      throw new Error('Payment exceeds remaining balance');
    }

    // 3️⃣ Create payment
    const payment = await Payment.create(
      [
        {
          project: projectId,
          amount,
          method,
          notes,
        },
      ],
      { session }
    );

    const newTotalPaid = totalPaid + amount;

    // 4️⃣ Update payment status
    if (newTotalPaid === 0) {
      project.paymentStatus = 'pending';
    } else if (newTotalPaid < project.budget) {
      project.paymentStatus = 'partial';
    } else {
      project.paymentStatus = 'paid';
    }

    await project.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      data: payment[0],
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : 'Payment failed',
    });
  }
};
