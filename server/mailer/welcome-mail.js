const welcomeMail = () => {
  const emailContent = {
    subject: 'Chào mừng bạn đến với HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">
          Chúc một ngày tốt lành!
        </h2>
        <p>Vui lòng đăng nhập để bắt đầu</p>
        <a href='${process.env.CLIENT_URL}/login' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          ĐĂNG NHẬP
        </a>
        <p>Nếu nút không hoạt động, bạn cũng có thể nhấp vào liên kết bên dưới:</p>
        <div>${process.env.CLIENT_URL}/login</div>
      </div>
    `
  };

  return emailContent;
};

export default welcomeMail;
