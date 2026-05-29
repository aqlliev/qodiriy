import { createClient } from '@supabase/supabase-js';

const MAX = { name: 200, email: 320, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const hasSupabase = Boolean(url && serviceKey);
  if (!hasSupabase && !resendKey) {
    return res.status(500).json({ error: 'Server is not configured.' });
  }

  const body = parseBody(req.body);
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();

  // Honeypot: a hidden field real users never fill. If it has a value,
  // it's almost certainly a bot — accept silently and store nothing.
  if (String(body.company || '').trim()) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (name.length > MAX.name || email.length > MAX.email || message.length > MAX.message) {
    return res.status(400).json({ error: 'One or more fields are too long.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  let stored = false;
  let emailed = false;

  if (hasSupabase) {
    try {
      const supabase = createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      const { error } = await supabase.from('messages').insert({ name, email, message });
      if (error) console.error('Supabase insert failed:', error.message);
      else stored = true;
    } catch (err) {
      console.error('Supabase insert threw:', err);
    }
  }

  // Best-effort email notification. Runs even if the DB write failed (e.g. a
  // paused free-tier project), so a submission still reaches a real inbox.
  if (resendKey) {
    try {
      emailed = await sendNotificationEmail(resendKey, { name, email, message });
    } catch (err) {
      console.error('Resend email threw:', err);
    }
  }

  // The message got through as long as it was stored OR emailed.
  if (!stored && !emailed) {
    return res.status(502).json({ error: 'Could not deliver your message right now. Please email me directly.' });
  }

  return res.status(200).json({ ok: true });
}

async function sendNotificationEmail(apiKey, { name, email, message }) {
  const to = process.env.CONTACT_TO_EMAIL || 'aqlliev@outlook.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `New message from your portfolio contact form\n\nName:  ${name}\nEmail: ${email}\n\n${message}\n`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    console.error('Resend API error:', response.status, detail);
    return false;
  }
  return true;
}
