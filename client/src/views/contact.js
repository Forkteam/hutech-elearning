import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function contact() {
  return (
    <div className="Contact">
      <Typography>
        <div className="Introduce">
          <h2>LIÊN HỆ</h2>
          <p>
            Chúng tôi trân trọng mọi ý kiến đóng góp của bạn. Đừng ngại liên hệ
            khi bạn có bất kỳ câu hỏi nào.
          </p>
        </div>

        <div className="ContactUs">
          <div className="TextInput">
            <div className="Name">
              <p>Họ và tên</p>
              <input placeholder="Nhập tên của bạn"></input>
            </div>
            <div className="Email">
              <p>Email</p>
              <input placeholder="Nhập email của bạn"></input>
            </div>
            <div className="Phone">
              <p>Số điện thoại</p>
              <input placeholder="Nhập số điện thoại của bạn(Không bắt buộc)"></input>
            </div>
            <div className="Content">
              <p>Nội dung</p>
              <textarea placeholder="Bạn muốn nhắn gì cho chúng tôi"></textarea>
            </div>
            <br></br>
            <div className="Button">
              <button className="sendButtun">
                <span>Gửi đi</span>
              </button>
            </div>
          </div>
          <div className="Information">
            <div className="icon">
              <a href="#">
                <div className="Facebook">
                  <FacebookIcon />
                </div>
              </a>
              <a href="#">
                <div className="Youtube">
                  <YouTubeIcon />
                </div>
              </a>
            </div>
            <div className="ContactInfo">
              <div className="Address">
                <p>Địa chỉ</p>
                <span>475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM</span>
              </div>
              <div className="ContactEmail">
                <p>Email</p>
                <span>hutech@hutech.edu.vn</span>
              </div>
              <div className="PhoneNumber">
                <p>Số điện thoại</p>
                <span>0865562385</span>
              </div>
              <div className="imgInformation">
                <img src="https://fullstack.edu.vn/assets/icon/contact.png"></img>
              </div>
            </div>
          </div>
        </div>
      </Typography>
    </div>
  );
}
