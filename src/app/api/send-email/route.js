import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, comments } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: `From: ${email}\n\n${message}\n\n${comments}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: 'error', error: error.message }), { status: 500 });
  }
}
