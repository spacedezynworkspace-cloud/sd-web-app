export function newProjectTemplate({
  project,
  clientName,
}: {
  project: string;
  clientName: string;
}) {
  return `<!DOCTYPE html> <html>
<head>
  <meta charset="UTF-8">
  <title>Project Confirmation</title>
</head>

<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8;">

  <table align="center" width="600" cellpadding="0" cellspacing="0" 
         style="background:#ffffff; margin-top:30px; border-radius:10px; overflow:hidden;">



<tr>
  <td style="background:#F19645; height:6px;"></td>
</tr>


<tr>
  <td align="center" style="padding:30px 20px 10px;">
    <img src="https://res.cloudinary.com/dcd8gvgup/image/upload/v1776681711/sd-web-app-logo_xhz7zr.png" 
         alt="Space Dezyn Logo" 
         width="100" 
         style="display:block;" />
  </td>
</tr>


<tr>
  <td align="center" style="padding:10px 30px;">
    <h2 style="margin:0; color:#222;">Project Confirmed</h2>
    <p style="margin:8px 0 0; color:#666; font-size:14px;">
      Your vision is now officially in motion
    </p>
  </td>
</tr>


<tr>
  <td style="padding:20px 35px; color:#333; font-size:15px; line-height:1.7;">

    <p>Dear <strong>${clientName}</strong>,</p>

    <p>
      We are pleased to officially confirm your project:
      <strong style="color:#F19645;">${project}</strong>.
    </p>

    <p>
      At <strong>Space Dezyn</strong>, we don’t just execute projects—we craft intentional, 
      visually compelling solutions tailored to your goals.
    </p>

    <p>
      <strong style="color:#222;">What happens next:</strong><br/>
      ✔ Initial project planning and structure setup begins immediately<br/>
      ✔ Our team will align resources based on your requirements<br/>
      ✔ You will receive progress updates at key milestones<br/>
      ✔ We will reach out if any clarification is needed
    </p>

    <p>
      If you have any additional details or adjustments you’d like us to consider, 
      simply reply to this email—we are here to refine everything to perfection.
    </p>

    <p style="margin-top:25px;">
      We appreciate your trust in us and look forward to delivering something exceptional.
    </p>

    <p style="margin-top:20px;">
      Warm regards,<br/>
      <strong>Space Dezyn</strong>
      <p>Operations Team</p>
    </p>

  </td>
</tr>

<!-- Footer -->
<tr>
  <td align="center" style="padding:18px; background:#f9f9f9; font-size:12px; color:#888;">
    © 2026 Space Dezyn. All rights reserved.<br/>
    <a href="https://www.spacedezyn.com" style="color:#F19645; text-decoration:none;">
      www.spacedezyn.com
    </a>
  </td>
</tr>


  </table>

</body>
</html>

  `;
}

export function updateProjectTemplate({
  project,
  clientName,
  stage,
  phase,
  status,
}: {
  project: string;
  clientName: string;
  stage: string;
  phase: string;
  status: string;
}) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Project Update</title>
</head>

<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8;">

  <table align="center" width="600" cellpadding="0" cellspacing="0" 
         style="background:#ffffff; margin-top:30px; border-radius:10px; overflow:hidden;">

    <!-- Top Accent Bar -->
    <tr>
      <td style="background:#F19645; height:6px;"></td>
    </tr>

    <!-- Logo -->
    <tr>
      <td align="center" style="padding:30px 20px 10px;">
        <img src="https://res.cloudinary.com/dcd8gvgup/image/upload/v1776681711/sd-web-app-logo_xhz7zr.png" 
             alt="Space Dezyn Logo" 
             width="100" 
             style="display:block;" />
      </td>
    </tr>

    <!-- Header -->
    <tr>
      <td align="center" style="padding:10px 30px;">
        <h2 style="margin:0; color:#222;">Project Progress Update</h2>
        <p style="margin:8px 0 0; color:#666; font-size:14px;">
          We are actively working on your project
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:20px 35px; color:#333; font-size:15px; line-height:1.7;">

        <p>Dear <strong>${clientName}</strong>,</p>

        <p>
          We are writing to keep you updated on the progress of your project:
          <strong style="color:#F19645;">${project}</strong>.
        </p>

        <!-- PROJECT SNAPSHOT -->
        <div style="margin:20px 0; padding:15px; border:1px solid #eee; border-radius:8px; background:#fafafa;">

          <p style="margin:0 0 10px; font-weight:bold; color:#222;">
            Project Update Summary
          </p>

          <ul style="margin:0; padding-left:18px; color:#333; line-height:1.8;">
            <li><strong>Project:</strong> ${project}</li>
            <li><strong>Phase:</strong> <span style="color:#F19645;text-transform: capitalize;">${phase}</span></li>
            <li><strong>Current Stage:</strong> <span style="color:#F19645;">${stage}</span></li>
            <li><strong>Status:</strong> ${status === 'in_progress' ? 'In Progress' : 'On Hold'}</li>
          </ul>

        </div>

        <p>
          Your project is progressing through the <strong>${phase}</strong> phase, 
          currently in the <strong>${stage}</strong> stage, and with status 
          <strong>'${status === 'in_progress' ? 'In Progress' : 'On Hold'}'</strong>.
        </p>

        <p>
          At this stage, our team is focused on ensuring everything aligns with your vision, 
          maintaining design consistency, and refining the core structure before moving forward.
        </p>

        ${
          status === 'in_progress'
            ? ` <p>
          <strong style="color:#222;">What this means for you:</strong><br/>
          ✔ Work is actively in progress<br/>
          ✔ Core deliverables for this phase are being developed<br/>
          ✔ We are preparing for the next stage of review or refinement<br/>
        </p>`
            : ` <p>
          <strong style="color:#222;">What this means for you:</strong><br/>
          ✔ Work is currently on hold<br/>
          ✔ Core deliverables for this phase are being paused.<br/>
          
        </p>`
        }
       

        <p>
          We will continue to keep you informed as we reach key milestones. If you have any feedback 
          or new requirements, feel free to reply to this email at any time.
        </p>

        <p style="margin-top:25px;">
          Thank you for trusting <strong>Space Dezyn</strong>. We are committed to delivering excellence at every step.
        </p>

        <p style="margin-top:20px;">
          Warm regards,<br/>
          <strong>Space Dezyn</strong>
          <p>Operations Team</p>
        </p>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="padding:18px; background:#f9f9f9; font-size:12px; color:#888;">
        © 2026 Space Dezyn. All rights reserved.<br/>
        <a href="https://www.spacedezyn.com" style="color:#F19645; text-decoration:none;">
          www.spacedezyn.com
        </a>
      </td>
    </tr>

  </table>

</body>
</html> `;
}

export function paymentProjectTemplate({
  amount,
  project,
}: {
  amount: number;
  project: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif;">
      <h2>Payment Confirmed ✅</h2>
      <p>Your payment of <strong>₦${amount}</strong> for <strong>${project}</strong> was successful.</p>
      <p>Thank you for your business!</p>
    </div>
  `;
}
