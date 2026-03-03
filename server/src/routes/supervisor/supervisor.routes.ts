import Router from 'express';
import { getAllSupervisors } from '../../controllers/supervisor/supervisor.controllers';
import authenticateMiddleWare from '../../middlewares/authenticate.middleware';

const router = Router();

router.get('/', authenticateMiddleWare, getAllSupervisors);

export default router;
