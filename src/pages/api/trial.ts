export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_HOST,
  port: Number(import.meta.env.SMTP_PORT ?? 587),
  secure: import.meta.env.SMTP_SECURE === 'true',
  auth: {
    user: import.meta.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email: string = (body?.email ?? '').trim();

    if (!email || !email.includes('@')) {
      return json({ success: false, message: 'Valid email required.' }, 400);
    }

    await transporter.sendMail({
      from: `"Deltra Website" <${import.meta.env.SMTP_FROM}>`,
      to: import.meta.env.SMTP_TO,
      replyTo: email,
      subject: `Trial / Demo Interest — ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;color:#0f1c2e;">
          <div style="background:#0f1c2e;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#1ecfad;margin:0;font-size:20px;">Demo Interest</h1>
            <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">via Product Showcase</p>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:none;padding:32px;border-radius:0 0 12px 12px;font-size:14px;">
            <p style="margin:0;">A visitor requested a demo from the interactive product showcase.</p>
            <p style="margin:16px 0 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#1ecfad;">${email}</a></p>
          </div>
        </div>
      `,
    });

    return json({ success: true });
  } catch (err) {
    console.error('[trial email error]', err);
    return json({ success: false }, 500);
  }
};

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
