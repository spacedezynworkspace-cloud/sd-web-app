import { Request, Response } from 'express';
import { User } from '../models/user.model';
import Project from '../models/project.models';
import { Payment } from '../models/payment.models';
import { sendSupervisorPaymentReminder } from '../utils/sendEmail';

export const activeDaysCron = async (req: Request, res: Response) => {
  try {
    // Verify the request came from a trusted source
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env['CRON_SECRET']}`) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    /** * The business logic will go here. * * We'll: * 1. Find eligible users. * 2. Increment active_days. * 3. Send reminder emails. */
    const supervisors = await User.find({
      role: 'supervisor',
      isActive: true,
    });

    const today = new Date();
    for (const supervisor of supervisors) {
      if (
        supervisor.lastActiveIncrement &&
        supervisor.lastActiveIncrement.toDateString() === today.toDateString()
      ) {
        continue;
      }

      const updatedSupervisor = await User.findOneAndUpdate(
        {
          _id: supervisor._id,
        },
        {
          $inc: {
            active_days: 1,
          },
          $set: {
            lastActiveIncrement: today,
          },
        },
        {
          new: true,
        }
      );

      if (!updatedSupervisor) {
        continue;
      }

      const project = await Project.findOne({
        status: 'in_progress',
        assignedTo: supervisor._id,
      });
      const paymentExists = await Payment.exists({
        ...(project?._id && { project: project._id }),
        receivedBy: updatedSupervisor._id,
        approved: true,
      });

      if (paymentExists) {
        continue;
      }

      if (updatedSupervisor.active_days! >= 29) {
       

        if (!project) {
          continue;
        }

        await sendSupervisorPaymentReminder({
          supervisorName: updatedSupervisor.email,
          projectName: project.name,
          clientName: project.client,
          activeDays: updatedSupervisor.active_days!,
        });
      }
    }

    return res
      .status(200)
      .json({ success: true, message: 'Cron executed successfully.' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};
