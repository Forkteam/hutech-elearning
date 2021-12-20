const notificationMail = (lectureId, subjectId) => {
  const emailContent = {
    subject: 'HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">New Lesson</h2>
        <p>Teacher just posted a new lesson. Click the link to learn:
        </p>
        <a href='${process.env.CLIENT_URL}/lectures?subjectId=${subjectId}&lectureId=${lectureId}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          LEARN
        </a>
        <p>If the button doesn't work, you can also click on the link below:</p>
        <div>${process.env.CLIENT_URL}/lectures?subjectId=${subjectId}&lectureId=${lectureId}</div>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default notificationMail;
