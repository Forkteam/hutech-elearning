const welcomeMail = () => {
  const emailContent = {
    subject: 'Hello from HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">
          Have a nice day!
        </h2>
        <p>Please login to get started</p>
        <a href='${process.env.CLIENT_URL}/login' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          LOGIN
        </a>
        <p>If the button doesn't work, you can also click on the link below:</p>
        <div>${process.env.CLIENT_URL}/login</div>
      </div>
    `
  };

  return emailContent;
};

export default welcomeMail;
