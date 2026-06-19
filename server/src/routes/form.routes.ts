import { Router } from 'express';
import { contactForm } from '../controllers/form/contact.controllers';

const router = Router();

router.post('/contact-form', contactForm);

export default router;
