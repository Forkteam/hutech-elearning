import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../../api';
import AlertMessage from '../layouts/alert-message';

export default function Contact() {
  const history = useHistory();
  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    content: '',
  });
  const { fullName, email, phone, content } = formData;

  const onChangeFormData = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const sendMail = async (formData) => {
    try {
      const response = await axios.post(`${apiURL}/auth/contact`, formData);
      return response.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.data) return error.response.data;
      return { success: false, message: error.message };
    }
  };

  const onSubmitFormData = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendMail(formData);
      if (!responseData.success) {
        setAlert({ type: 'error', message: responseData.message });
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({ type: 'success', message: responseData.message });
        setTimeout(() => {
          setAlert(null);
          history.push('/');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      content: '',
    });
  };

  return (
    <div className="Contact">
      <div className="Introduce">
        <h2>LIÊN HỆ</h2>
        <p>
          Chúng tôi trân trọng mọi ý kiến đóng góp của bạn. Đừng ngại liên hệ
          khi bạn có bất kỳ câu hỏi nào.
        </p>
      </div>
      <div className="ContactUs">
        <form className="TextInput" onSubmit={onSubmitFormData}>
          <AlertMessage info={alert} />
          <div className="Name">
            <p>Họ và tên</p>
            <input
              required
              placeholder="Tên của bạn"
              name="fullName"
              onChange={onChangeFormData}
              value={fullName}
            />
          </div>
          <div className="Email">
            <p>Email</p>
            <input
              required
              placeholder="Email của bạn"
              name="email"
              onChange={onChangeFormData}
              value={email}
            />
          </div>
          <div className="Phone">
            <p>Số điện thoại</p>
            <input
              placeholder="Số điện thoại của bạn (Không bắt buộc)"
              name="phone"
              onChange={onChangeFormData}
              value={phone}
            />
          </div>
          <div className="Content">
            <p>Nội dung</p>
            <textarea
              required
              placeholder="Bạn muốn nhắn gì cho chúng tôi"
              name="content"
              onChange={onChangeFormData}
              value={content}
            />
          </div>
          <br></br>
          <div className="Button">
            <button type="submit">
              <span>Gửi đi</span>
            </button>
          </div>
        </form>
        <div className="Information">
          <div className="icon">
            <a
              href="https://www.facebook.com/hutechuniversity"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Facebook">
                <FacebookIcon />
              </div>
            </a>
            <a
              href="https://www.youtube.com/c/HUTECHChannel"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Youtube">
                <YouTubeIcon />
              </div>
            </a>
          </div>
          <div className="ContactInfo">
            <div className="Address">
              <p>Địa chỉ</p>
              <span>
                Khu Công nghệ cao TP.HCM (SHTP), P.Long Thạnh Mỹ, Quận 9, TP.HCM
              </span>
            </div>
            <div className="ContactEmail">
              <p>Email</p>
              <span>hutech@hutech.edu.vn</span>
            </div>
            <div className="PhoneNumber">
              <p>Số điện thoại</p>
              <span>(028) 5445 7777 - Fax: (028) 5445 4444</span>
            </div>
            <div className="imgInformation">
              <img
                src="https://fullstack.edu.vn/assets/icon/contact.png"
                alt="information"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
