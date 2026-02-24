import { Request, Response } from 'express';
import Project from '../../models/project.models';
import { SortOrder } from 'mongoose';

// Create project
export const createProject = async (req: Request, res: Response) => {
  const project = await Project.create({
    ...req.body,
  });

  console.log('Created project: ', project);

  res.status(201).json({
    message: 'Project created successfully',
    success: true,
    data: project,
  });
};

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const {
      search,
      status,
      phase,
      state,
      startDate,
      endDate,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query;

    const query: any = {};

    // SEARCH
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { client: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
      ];
    }

    if (status) query.status = Number(status);
    if (phase) query.phase = Number(phase);
    if (state) query['location.state'] = state;

    if (startDate || endDate) {
      query.startDate = {};
      if (startDate) query.startDate.$gte = new Date(startDate as string);
      if (endDate) query.startDate.$lte = new Date(endDate as string);
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // 🔥 SORTING FIX
    const allowedSortFields = [
      'name',
      'client',
      'budget',
      'startDate',
      'createdAt',
    ];

    const sortField = allowedSortFields.includes(String(sortBy))
      ? String(sortBy)
      : 'createdAt';

    const sortDirection: SortOrder = sortOrder === 'asc' ? 1 : -1;

    const [projects, total] = await Promise.all([
      Project.find(query)
        .sort({ [sortField]: sortDirection } as Record<string, SortOrder>)
        .skip(skip)
        .limit(limitNumber),
      Project.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      message: 'Projects fetched successfully',
      data: projects,
      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error,
    });
  }
};
