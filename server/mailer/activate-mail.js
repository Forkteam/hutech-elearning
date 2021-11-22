const activateMail = (accessToken, id, username) => {
  const emailContent = {
    subject: 'Activate account for HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to HUTECH E-LEARNING</h2>
        <p>You have registered an account on HUTECH E-LEARNING! Before we get started,
          we just need to confirm that this is you. Click the link to activate your account:
        </p>
        <p>Your username: ${username}</p>
        <a href='${process.env.CLIENT_URL}/activate-account?token=${accessToken}&id=${id}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          ACTIVATE
        </a>
        <p>If the button doesn't work, you can also click on the link below:</p>
        <div>${process.env.CLIENT_URL}/activate-account?token=${accessToken}&id=${id}</div>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default activateMail;
