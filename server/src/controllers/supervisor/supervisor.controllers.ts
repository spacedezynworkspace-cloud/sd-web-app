import { Request, Response } from 'express';
import { User } from '../../models/user.model';
import Project from '../../models/project.models';

// Get all projects
export const getAllSupervisors = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    const query: any = { role: 'supervisor' };

    // SEARCH
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
      ];
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
