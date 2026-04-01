import { projectStages } from '../../types/project.types';

export function updateProjectTemplate({
  project,
  clientName,
  phase,
}: {
  project: string;
  clientName: string;
  stages: projectStages[];
  phase: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif;">
        <h2>Project Progress Update</h2>
        <p>Dear <strong>${clientName}</strong>,</p>
        <p>Your project <strong>${project}</strong> phase is ${phase}</p>
        <p>Thank you for choosing Space Dezyn! We look forward to bringing your vision to life.</p>
    </div>
  `;
}
