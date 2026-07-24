import { otpEmailTemplate } from '../templates/auth/otpEmail.template';
import { otpForgotPasswordTemplate } from '../templates/auth/otpForgotPassword.template';
import { newsLetterTemplate } from '../templates/user/newsLetter.template';
import { staffInivitationEmailTemplate } from '../templates/staff/staffInivitationEmail';
import {
  contactFormResponseTemplate,
  newProjectTemplate,
  paymentProjectTemplate,
  supervisorPaymentReminderTemplate,
  supervisorSalaryPaidTemplate,
  updateProjectTemplate,
} from '../templates/projectEmailTemplates';
import { sendEmail } from '../config/resend.config';
export const sendOtpEmail = async (
  to: string,
  otp: string,
  purpose: string
) => {
  await sendEmail({
    to,
    subject: `${purpose} Code`,
    html: otpEmailTemplate(otp, purpose),
  });
};

export const sendProjectPaymentEmail = async (
  to: string,
  amount: number,
  project: string
) => {
  await sendEmail({
    to,
    subject: `${project} Payment Confirmation`,
    html: paymentProjectTemplate({ amount, project }),
  });
};

export const sendOtpForgotPasswordEmail = async (
  to: string,
  otp: string,
  purpose: string
) => {
  await sendEmail({
    to,
    subject: `Password Reset Code`,
    html: otpForgotPasswordTemplate(otp, purpose),
  });
};

export const sendNewsletterEmail = async (to: string) => {
  await sendEmail({
    to,
    subject: `Newsletter Subscription`,
    html: newsLetterTemplate(),
  });
};

export const sendStaffInivitationEmail = async (
  to: string,
  firstName: string,
  invitationLink: string
) => {
  await sendEmail({
    to,
    subject: `Invitation to Join Momodust Studios Team`,
    html: staffInivitationEmailTemplate({ firstName, invitationLink }),
  });
};

export const sendNewProjectEmail = async (
  to: string,
  clientName: string,
  project: string
) => {
  await sendEmail({
    to,
    subject: `${project} Confirmation`,
    html: newProjectTemplate({ project, clientName }),
  });
};

export const sendUpdateProjectEmail = async (
  to: string,
  project: string,
  clientName: string,
  stage: string,
  phase: string,
  status: string
) => {
  await sendEmail({
    to,
    subject: `${project} Updates`,
    html: updateProjectTemplate({ project, clientName, stage, phase, status }),
  });
};

export const sendContactFormEmail = async (
  email: string,
  subject: string,
  message: string
) => {
  await sendEmail({
    to: email,
    subject,
    html: contactFormResponseTemplate({
      email,
      subject,
      message,
    }),
  });
};

export const sendSupervisorPaymentReminder = async ({
  supervisorName,
  projectName,
  clientName,
  activeDays,
}: {
  supervisorName: string;
  projectName: string;
  clientName: string;
  activeDays: number;
}) => {
  await sendEmail({
    to: 'ekonge903@gmail.com',
    subject: 'Supervisor Payment Due Tomorrow',
    html: supervisorPaymentReminderTemplate({
      supervisorName,
      projectName,
      clientName,
      activeDays,
    }),
  });
};

export const sendSupervisorSalaryPaidEmail = async ({
  supervisorEmail,
  amount,
  method,
  reference,
}: {
  supervisorEmail: string;
  amount: number;
  method: string;
  reference: string;
}) => {
  await sendEmail({
    to: supervisorEmail,
    subject: 'Salary Payment Confirmation',
    html: supervisorSalaryPaidTemplate({
      amount,
      method,
      reference,
    }),
  });
};
