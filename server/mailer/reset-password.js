const resetPasswordMail = (accessToken, userId) => {
  const emailContent = {
    subject: 'Reset password for HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to HUTECH E-LEARNING</h2>
        <p>You have requested to reset your password. Fill out the form to confirm:
        </p>
        <a href='${process.env.CLIENT_URL}/reset-password?token=${accessToken}&id=${userId}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          RESET
        </a>
        <p>If the button doesn't work, you can also click on the link below:</p>
        <div>${process.env.CLIENT_URL}/reset-password?token=${accessToken}&id=${userId}</div>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default resetPasswordMail;
