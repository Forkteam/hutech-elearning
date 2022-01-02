const notificationMail = (lectureId) => {
  const emailContent = {
    subject: 'Bài học mới HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Bài học mới</h2>
        <p>Thầy vừa đăng bài mới. Nhấp vào liên kết để tìm hiểu:
        </p>
        <a href='${process.env.CLIENT_URL}/subjects/lectures/${lectureId}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          TÌM HIỂU
        </a>
        <p>Nếu nút không hoạt động, bạn cũng có thể nhấp vào liên kết bên dưới:</p>
        <div>${process.env.CLIENT_URL}/subjects/lectures/${lectureId}</div>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default notificationMail;
