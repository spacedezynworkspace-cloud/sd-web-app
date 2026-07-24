import { Request, Response } from 'express';
import { User } from '../../models/user.model';
import Project from '../../models/project.models';
import { Payment } from '../../models/payment.models';
import { sendSupervisorSalaryPaidEmail } from '../../utils/sendEmail';

// Get all supervisors
export const getAllSupervisors = async (req: Request, res: Response) => {
  try {
    const { search, isActive } = req.query;

    const query: any = { role: 'supervisor' };

    // SEARCH
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
      ];
    }

    // active supervisors
    if (isActive) {
      query.isActive = isActive;
    }

    const supervisors = await User.find(query)
      .select('-password')
      .sort({ email: 1 });

    res.status(200).json({
      success: true,
      message: 'Supervisors fetched successfully',
      data: supervisors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch supervisors',
      error,
    });
  }
};

// assign supervisor
export const assignSupervisor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { supervisorId } = req.body;

  try {
    const project = await Project.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          assignedTo: supervisorId,
        },
      },
      { new: true }
    );
    await User.findByIdAndUpdate(
      supervisorId,
      { isActive: true },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: `Supervisor added to ${project?.name}`,
      data: project,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// remove supervisor
export const removeSupervisor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { supervisorId } = req.body;

  console.log(id);
  console.log(supervisorId);

  try {
    const project = await Project.findByIdAndUpdate(
      id,
      {
        $pull: {
          assignedTo: supervisorId,
        },
      },
      { new: true }
    );

    await User.findByIdAndUpdate(
      supervisorId,
      { isActive: false },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: `Supervisor removed from ${project?.name}`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

// Supervisor payroll
export const supervisorsPayroll = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    const query: any = {
      role: 'supervisor',
      isActive: true,
    };

    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
      ];
    }

    const supervisors = await User.find(query)
      .select('-password')
      .sort({ active_days: -1 });

    const payroll = await Promise.all(
      supervisors.map(async (supervisor) => {
        const project = await Project.findOne({
          assignedTo: supervisor._id,
          status: 'in_progress',
        })
          .select('name client status location description')
          .lean();

        const paymentExists = project
          ? await Payment.exists({
              project: project._id,
              receivedBy: supervisor._id,
              type: 'salary',
              approved: true,
            })
          : false;

        return {
          _id: supervisor._id,

          supervisor: {
            name: supervisor.name,
            email: supervisor.email,
            phone: supervisor.phone,
            role: supervisor.role,
            lastActiveIncrement: supervisor.lastActiveIncrement,
          },
          amount: 350000,

          active_days: supervisor.active_days,

          isActive: supervisor.isActive,

          paymentDue: supervisor.active_days
            ? supervisor.active_days == 30
            : false,
          paymentOverDue: supervisor.active_days
            ? supervisor.active_days > 30
            : false,

          paymentTomorrow: supervisor.active_days === 29,

          salaryPaid: Boolean(paymentExists),

          project: project
            ? {
                _id: project._id,
                name: project.name,
                client: project.client,
                status: project.status,
                description: project.description,
                location: project.location,
              }
            : null,
        };
      })
    );

    return res.status(200).json({
      success: true,
      message: 'Payroll fetched successfully',
      data: payroll,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch payroll',
      error,
    });
  }
};

// Pay supervisor salary

export const paySupervisorSalary = async (req: Request, res: Response) => {
  try {
    const { supervisorId } = req.params;
    console.log('req.params: ', req.params);
    console.log('supervisorId: ', supervisorId);

    if (!supervisorId) {
      return res.status(400).json({
        success: false,
        message: 'Invalid supervisor id',
      });
    }

    const { amount, method, reference, notes } = req.body;

    const supervisor = await User.findById(supervisorId);

    if (!supervisor || supervisor.role !== 'supervisor') {
      return res.status(404).json({
        success: false,
        message: 'Supervisor not found',
      });
    }

    const activeDays = supervisor.active_days ?? 0;

    if (activeDays < 30) {
      return res.status(400).json({
        success: false,
        message: 'Supervisor has not reached payroll threshold',
      });
    }

    const salaryAlreadyPaid = await Payment.exists({
      receivedBy: supervisor._id,
      type: 'salary',
      approved: true,
      activeDays,
    });

    if (salaryAlreadyPaid) {
      return res.status(400).json({
        success: false,
        message: 'Salary already paid',
      });
    }

    const project = await Project.findOne({
      assignedTo: supervisor._id,
      status: 'in_progress',
    });

    const paymentData: any = {
      amount,
      paymentDate: new Date(),
      method,
      reference,
      notes,
      approved: true,
      receivedBy: supervisor._id,
      paymentType: 'salary',
      activeDays,
    };

    if (project) {
      paymentData.project = project._id;
    }

    const payment = await Payment.create(paymentData);

    await User.updateOne(
      { _id: supervisor._id },
      {
        $set: {
          active_days: activeDays - 30,
        },
      }
    );

    sendSupervisorSalaryPaidEmail({
      supervisorEmail: supervisor.email,
      amount,
      method,
      reference,
    })
      .then(() => {
        console.log('Payment email sent to:', supervisor.email);
      })
      .catch((emailError) => {
        console.error('Email failed but project updated:', emailError);
      });

    return res.status(201).json({
      success: true,
      message: 'Supervisor salary paid successfully',
      data: payment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to pay supervisor',
      error,
    });
  }
};
