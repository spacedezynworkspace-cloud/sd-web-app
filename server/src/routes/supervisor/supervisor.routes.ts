import Router from 'express';
import { getAllSupervisors } from '../../controllers/supervisor/supervisor.controllers';
import authenticateMiddleWare from '../../middlewares/authenticate.middleware';
import {
  getProject,
  updateProject,
} from '../../controllers/admin/project.controllers';

const router = Router();

router.get('/', authenticateMiddleWare, getAllSupervisors);
router.get('/projects/:id', getProject);
router.patch('/projects/:id', authenticateMiddleWare, updateProject);

export default router;
