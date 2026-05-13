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
    const { name, email, phone, schoolName, schoolRole, numberOfStudents, message } = body ?? {};
    if (!name || !email || !schoolName || !schoolRole || !numberOfStudents || !phone) {
      return json({ success: false, message: "Please fill in all required fields." }, 400);
    }
    const sizeLabel = {
      below_200: "< 200 students",
      between_200_500: "200–500 students",
      between_500_1000: "500–1,000 students",
      between_1000_2000: "1,000–2,000 students",
      above_2000: "2,000+ students"
    };
    await transporter.sendMail({
      from: `"Deltra Website" <${"your-email@gmail.com"}>`,
      to: "hello@deltratech.id",
      replyTo: email,
      subject: `Demo Request — ${schoolName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f1c2e;">
          <div style="background:#0f1c2e;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#1ecfad;margin:0;font-size:20px;">New Demo Request</h1>
            <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">via Deltra Landing Page</p>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:none;padding:32px;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#6b8f88;width:160px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b8f88;">School</td><td style="padding:8px 0;font-weight:600;">${schoolName}</td></tr>
              <tr><td style="padding:8px 0;color:#6b8f88;">Role</td><td style="padding:8px 0;">${schoolRole}</td></tr>
              <tr><td style="padding:8px 0;color:#6b8f88;">School size</td><td style="padding:8px 0;">${sizeLabel[numberOfStudents] ?? numberOfStudents}</td></tr>
              <tr><td style="padding:8px 0;color:#6b8f88;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1ecfad;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6b8f88;">WhatsApp</td><td style="padding:8px 0;"><a href="https://wa.me/${phone.replace(/\D/g, "")}" style="color:#1ecfad;">${phone}</a></td></tr>
              ${message ? `<tr><td style="padding:8px 0;color:#6b8f88;vertical-align:top;">Message</td><td style="padding:8px 0;">${message}</td></tr>` : ""}
            </table>
          </div>
        </div>
      `
    });
    return json({ success: true });
  } catch (err) {
    console.error("[contact email error]", err);
    return json({ success: false, message: "Failed to send. Please try again." }, 500);
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
