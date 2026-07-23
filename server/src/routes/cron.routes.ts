import { Router } from 'express';
import { activeDaysCron } from '../controllers/cron.controller';

const router = Router();

router.post('/active-days', activeDaysCron);
export default router;
