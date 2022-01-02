const resetPasswordMail = (accessToken, userId) => {
  const emailContent = {
    subject: 'Đặt lại mật khẩu HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Đặt lại mật khẩu HUTECH E-LEARNING</h2>
        <p>Bạn đã yêu cầu đặt lại mật khẩu của mình. Điền vào biểu mẫu để xác nhận:
        </p>
        <a href='${process.env.CLIENT_URL}/reset-password?token=${accessToken}&id=${userId}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          ĐẶT LẠI MẬT KHẨU
        </a>
        <p>Nếu nút không hoạt động, bạn cũng có thể nhấp vào liên kết bên dưới:</p>
        <div>${process.env.CLIENT_URL}/reset-password?token=${accessToken}&id=${userId}</div>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default resetPasswordMail;
