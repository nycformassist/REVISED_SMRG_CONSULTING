import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ error: 'Missing required baseline validation fields.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Vercel environment variable RESEND_API_KEY is not configured or missing.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'SMRG Consulting <onboarding@resend.dev>',
      to: ['healthcarebyvalentine@gmail.com'],
      subject: `New Demonstration Request: ${company} (${name})`,
      text: `
        New SMRG Consulting Demo Request Received:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not Provided'}
        Company: ${company}
        
        Details:
        ${message}
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: `Serverless Function Exception: ${error.message}` });
  }
}