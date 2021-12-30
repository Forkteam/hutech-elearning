import * as React from 'react';
import Box from '@mui/material/Box';
const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <div style={{width:'425px',margin:'5%'}}>
      <Box style={{border: '2px double Black',height:'450px'}} >
      <h1 style={{class:"font-weight-bold",textAlign:'center'}} >FACEBOOK HUTECH</h1>
      <ul type='none'>
          <li>
          <a href="https://www.facebook.com/hutech.itcenter/" target="_blank" >Trung Tâm Quản lý Công nghệ Thông tin</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/PhongCongTacSinhVienHocSinhHutech" target="_blank">Phòng công tác sinh viên - học sinh</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/doantnhoisv" target="_blank">Đoàn thanh niên - hội sinh viên</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/HUTECH-C%C3%A2u-l%E1%BA%A1c-b%E1%BB%99%C4%90%E1%BB%99iNh%C3%B3m-255935774577963/?ref=br_rs" target="_blank">Câu lạc bộ/Đội/Nhóm</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/Hutech.International" target="_blank">Viện đào tạo quốc tế</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/khoacddt.hutech.3" target="_blank">Đào tạo sau đại học</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/CSVHUTECH" target="_blank">Kết nối cựu sinh viên</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/HUTECH-360-267147230089294" target="_blank">HUTECH 360</a>          
          </li>
          <li>
          <a href="https://www.facebook.com/itHutech" target="_blank">Khoa công nghệ thông tin</a>
          </li>
          <li>
          <a href="https://www.facebook.com/hutech.caodangthuchanh" target="_blank">Khoa cao đẳng thực hành</a>
          </li>
          <li>
          <a href="https://www.facebook.com/hutech.khoacodientu/" target="_blank">Khoa cơ - điện - điện tử</a>
          </li>
          <li>
          <a href="https://www.facebook.com/lawhutech" target="_blank">Khoa luật</a>
          </li>
          <li>
          <a href="https://www.facebook.com/khoaxaydung.hutech" target="_blank">Khoa Xây Dựng</a>
          </li>
          <li>
          <a href="https://www.facebook.com/hutech.kttcnh" target="_blank">Khoa Kế Toán Tài Chính Ngân Hàng</a>
          </li>
          <li>
          <a href="https://www.facebook.com/VienVanHoaNgheThuat" target="_blank">Trung tâm Văn hoá Nghệ thuật</a>
          </li>
          <li>
          <a href="https://www.facebook.com/qhdnhutech" target="_blank">Trung tâm quan hệ doanh nghiệp</a>
          </li>
      </ul>
      </Box>
      </div>
  );
}
