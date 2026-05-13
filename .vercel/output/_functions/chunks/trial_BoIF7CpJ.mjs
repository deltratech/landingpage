import nodemailer from 'nodemailer';

const prerender = false;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number("587"),
  secure: false,
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password"
  }
});
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const email = (body?.email ?? "").trim();
    if (!email || !email.includes("@")) {
      return json({ success: false, message: "Valid email required." }, 400);
    }
    await transporter.sendMail({
      from: `"Deltra Website" <${"your-email@gmail.com"}>`,
      to: "hello@deltratech.id",
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
      `
    });
    return json({ success: true });
  } catch (err) {
    console.error("[trial email error]", err);
    return json({ success: false }, 500);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
