import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const subject = formData.get('subject')?.toString()
    const email = formData.get('email')?.toString()
    const name = formData.get('name')?.toString()
    const message = formData.get('message')?.toString()

    const info = await transporter.sendMail({
      from: `${name} ${email}`,
      to: "bar@example.com, baz@example.com",
      subject: subject,
      text: `${message}`,
      html: `<p>${message}</>`,
    });

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
