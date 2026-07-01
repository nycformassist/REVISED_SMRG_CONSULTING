import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize your Resend instance with your system environment token
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enforce explicit POST requests to protect server computing loops
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, organization, system, message } = req.body;

    // Hardened safety gate: Verify critical parameters exist before executing token paths
    if (!name || !email || !organization || !system) {
      return res.status(400).json({ error: 'Missing mandatory request parameters.' });
    }

    // Programmatic email payload construction dispatched straight via Resend
    const data = await resend.emails.send({
      from: 'SMRG Intake Desk <onboarding@resend.dev>', // Keep or replace with your verified custom domain address
      to: ['support@smrgconsulting.com'],
      subject: `[Intake Activation] ${system} - ${organization}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px;">
          <h2 style="border-bottom: 2px solid #c9a84c; padding-bottom: 10px; color: #0a0e1a;">
            New Intake Readiness Registration
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%;">Applicant Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email String:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Vector:</td>
              <td style="padding: 8px 0;">${phone || 'Not Provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Entity/Firm Name:</td>
              <td style="padding: 8px 0;">${organization}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Selected Path:</td>
              <td style="padding: 8px 0; color: #c9a84c; font-weight: bold;">${system}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 30px; border-bottom: 1px solid #eee; padding-bottom: 6px; color: #0a0e1a;">
            Contextual Core Payload &amp; Diagnostics
          </h3>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #c9a84c; font-family: monospace; white-space: pre-wrap; line-height: 1.6;">
            ${message || 'No additional context provided.'}
          </p>
        </div>
      `,
    });

    // Sync successfully with your frontend client
    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    // Gracefully capture system anomalies without hanging the engine
    return res.status(500).json({ error: error.message || 'Internal Server Error Routing Webhook' });
  }
}