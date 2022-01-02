import nodemailer from 'nodemailer';

const mailer = async (emailAddress, emailContent) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_MAIL_USERNAME,
        pass: process.env.SENDGRID_MAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: '"HUTECH E-LEARNING" <nhuthuynh.phu@gmail.com>',
      to: emailAddress,
      subject: emailContent.subject,
      html: emailContent.html
    });
  } catch (error) {
    console.log(error);
  }
};

export default mailer;
