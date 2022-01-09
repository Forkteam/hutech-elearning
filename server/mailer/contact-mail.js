const contactMail = (email, fullName, content, phone) => {
  const emailContent = {
    subject: 'Yêu cầu liên hệ HUTECH E-LEARNING ✔',
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Yêu cầu liên hệ của người dùng</h2>
        <p>Họ tên: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Số điện thoại: ${phone}</p>
        <p>Nội dung: ${content}</p>
      </div>
    `
  };
  const { subject, html } = emailContent;

  return { subject, html };
};

export default contactMail;
