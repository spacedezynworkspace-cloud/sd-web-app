export function updateProjectTemplate({
  project,
  clientName,
  status,
  phase,
}: {
  project: string;
  clientName: string;
  status: number;
  phase: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif;">
        <h2>Project Progress Update</h2>
        <p>Dear <strong>${clientName}</strong>,</p>
        <p>Your project <strong>${project}</strong> status is ${status}% and phase is ${phase}</p>
        <p>Thank you for choosing Space Dezyn! We look forward to bringing your vision to life.</p>
    </div>
  `;
}
