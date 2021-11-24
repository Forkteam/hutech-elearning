const inviteStudent = (inviteToken, coursesId, studentId) => {
  const emailContent = {
    subject: 'You have an invitation ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Invitation</h2>
        <p>The teacher invites you to join his courses at HUTECH E-LEARNING.
        If you agree the invitation, please click the link to join:
        </p>
        <a href='${process.env.CLIENT_URL}/courses/${coursesId}?token=${inviteToken}&studentId=${studentId}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          I AGREE
        </a>
        <p>If the button doesn't work, you can also click on the link below:</p>
        <div>${process.env.CLIENT_URL}/courses/${coursesId}?token=${inviteToken}&studentId=${studentId}</div>
        <p>The invitation will expire in 1 day. If you deny, you can delete this email :v</p>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default inviteStudent;
