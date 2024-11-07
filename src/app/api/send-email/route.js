import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    console.log("API route triggered");

    // Log environment variables (use with caution, especially in production)
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    // Parse request body
    const { name, email, message, comments } = await request.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to your own email
      subject: `Message from ${name}`,
      text: `From: ${email}\n\n${message}\n\n${comments}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ status: 'error', error: error.message }), { status: 500 });
  }
}
