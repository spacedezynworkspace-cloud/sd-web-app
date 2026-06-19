import { Request, Response } from 'express';
import { sendContactFormEmail } from '../../utils/sendEmail';

export const contactForm = async (req: Request, res: Response) => {
  const { email, subject, message } = req.body;

  try {
    await sendContactFormEmail(email, subject, message);

    return res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully. We'll get back to you shortly.",
    });
  } catch (error) {
    console.error('Email sending failed:', error);

    return res.status(500).json({
      success: false,
      message:
        'Something went wrong while sending your message. Please try again later.',
    });
  }
};
