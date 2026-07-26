import { Router } from 'express';
import { activeDaysCron } from '../controllers/cron.controller';

const router = Router();

router.get('/active-days', activeDaysCron);
export default router;
