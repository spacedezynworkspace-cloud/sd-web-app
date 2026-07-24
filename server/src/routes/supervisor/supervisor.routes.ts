import Router from 'express';
import {
  assignSupervisor,
  getAllSupervisors,
  paySupervisorSalary,
  removeSupervisor,
  supervisorsPayroll,
} from '../../controllers/supervisor/supervisor.controllers';
import authenticateMiddleWare from '../../middlewares/authenticate.middleware';
import {
  getProject,
  updateProject,
} from '../../controllers/admin/project.controllers';

const router = Router();

router.get('/', authenticateMiddleWare, getAllSupervisors);
router.get('/projects/:id', getProject);
router.patch('/projects/:id', authenticateMiddleWare, updateProject);
router.patch(
  '/projects/:id/assign-supervisor',
  authenticateMiddleWare,
  assignSupervisor
);
router.patch(
  '/projects/:id/remove-supervisor',
  authenticateMiddleWare,
  removeSupervisor
);
router.get('/payments', authenticateMiddleWare, supervisorsPayroll);

router.post(
  '/payments/:supervisorId',
  authenticateMiddleWare,
  paySupervisorSalary
);

export default router;
