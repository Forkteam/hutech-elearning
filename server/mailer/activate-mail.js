const activateMail = (accessToken, id, username) => {
  const emailContent = {
    subject: 'Kính hoạt tài khoản HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Cảm ơn bạn đã đăng ký HUTECH E-LEARNING</h2>
        <p>Bạn đã đăng ký tài khoản trên HUTECH E-LEARNING! Trước khi bắt đầu,
          chúng tôi chỉ cần xác nhận rằng đây là bạn. Nhấp vào liên kết để kích hoạt tài khoản của bạn:
        </p>
        <p>Tên đăng nhập đã đăng ký: ${username}</p>
        <a href='${process.env.CLIENT_URL}/activate-account?token=${accessToken}&id=${id}' style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
          KÍCH HOẠT
        </a>
        <p>Nếu nút không hoạt động, bạn cũng có thể nhấp vào liên kết bên dưới:</p>
        <div>${process.env.CLIENT_URL}/activate-account?token=${accessToken}&id=${id}</div>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default activateMail;
