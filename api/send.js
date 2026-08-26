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
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'SMRG Consulting <onboarding@resend.dev>',
        to: ['Healthcarebyvalentine@gmail.com'],
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
      })
    });

    const resendData = await resendResponse.json();

    if (resendResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(resendResponse.status).json({ 
        error: `Resend Rejected Request: ${resendData.message || JSON.stringify(resendData)}` 
      });
    }
  } catch (error) {
    return res.status(500).json({ error: `Serverless Function Exception: ${error.message}` });
  }
}