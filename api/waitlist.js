const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Simple email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = async function handler(req, res) {
  // CORS headers for the landing page
  res.setHeader('Access-Control-Allow-Origin', 'https://grailseeker.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, collecting_focus } = req.body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email address is required' });
    }

    // Get request metadata
    const ip_address = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
    const user_agent = req.headers['user-agent'] || 'unknown';

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist_signups')
      .insert({
        email: email.toLowerCase().trim(),
        collecting_focus: collecting_focus?.trim() || null,
        ip_address,
        user_agent,
        source: 'landing_page'
      })
      .select()
      .single();

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return res.status(200).json({
          success: true,
          message: 'You\'re already on the list!'
        });
      }

      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save signup' });
    }

    return res.status(200).json({
      success: true,
      message: 'Welcome to the waitlist!'
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
