const { Resend } = require('resend');

const NOTIFICATION_EMAIL = 'grailseekerhq@gmail.com';

const SUBJECT_LABELS = {
  partnership: 'Partnership Inquiry',
  beta: 'Beta Testing Interest',
  general: 'General Question',
  press: 'Press/Media'
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://grailseeker.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Name, email, subject, and message are required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email address is required' });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Contact form error: RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Email delivery is not configured yet. Please email us directly.' });
    }

    const subjectLabel = SUBJECT_LABELS[subject] || subject;
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Grail Seeker <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `[Grail Seeker Contact] ${subjectLabel} — ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
