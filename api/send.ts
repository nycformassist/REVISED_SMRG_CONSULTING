import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  // Validate critical baseline inputs
  if (!name || !email || !company) {
    return res.status(400).json({ error: 'Missing required baseline validation data.' });
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'SMRG Diagnostics <onboarding@resend.dev>',
        to: process.env.TO_EMAIL || 'info@smrgconsulting.com',
        subject: `SMRG Blindspot Scan: ${company}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}

          Diagnostic Payload Details:
          ${message}
        `
      })
    });

    if (resendResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorDetails = await resendResponse.text();
      console.error('Resend API Error Output:', errorDetails);
      return res.status(500).json({ error: 'Resend failed to deliver message payload.' });
    }
  } catch (error) {
    console.error('Serverless Function Catch Execution Error:', error);
    return res.status(500).json({ error: 'Internal server tracking error.' });
  }
}