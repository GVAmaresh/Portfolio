import nodemailer from 'nodemailer';


async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', 
      pass: 'your-app-password', 
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com', 
    to: 'recipient@example.com', 
    subject: 'Test Email from TypeScript',
    text: 'This is a test email sent from a Node.js/TypeScript application!', 
    html: '<b>This is a test email sent from a Node.js/TypeScript application!</b>', 
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}

// sendEmail();




