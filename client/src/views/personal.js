import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import { Box } from '@mui/system';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Personal() {
  return (
    <div className='personal'>
      <div className="div1">
        <Box className = "box1" > <img src='https://i1.wp.com/www.polar-pinguin.berlin/wp-content/uploads/2017/12/image_preview.png?w=1080&ssl=1'></img></Box>
      </div>
      <div className="div2">
        <Box className = "box2" >Cập nhật gần nhất: 01 giờ 21 phút, ngày 31/12/2021 </Box>
      </div>
      <div className="div3">
    <Box className = "box3"  >Yêu cầu chỉnh sửa các thông tin khác <br></br>xin liên hệ:<br></br> • PHÒNG ĐÀO TẠO - THẢO KHÍ <br></br>• Trụ sở: 475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM <br></br>• ĐT:(086)5 652 385 <br></br>• Fax: <br></br>• Email: </Box>
      </div>
      <div className="div4">
        <div _ngcontent-c8="" class="row ng-star-inserted">

          </div>
          <section _ngcontent-c8="" class="col-md-9 jarviswidget jarviswidget-sortable jarviswidget-color-blueDark pr-2">
      

          <div _ngcontent-c8="" class="widget-body">
            <form _ngcontent-c8="" class="form-horizontal ng-untouched ng-pristine ng-valid" novalidate="">
          <div _ngcontent-c8="" class="row">
            <div _ngcontent-c8="" class="col-md-6">
              Mã số sinh viên:
              <span _ngcontent-c8="" class="font-weight-bold">1911064729</span>
            </div>
            <div _ngcontent-c8="" class="col-md-6">
              Họ tên:
              <span _ngcontent-c8="" class="font-weight-bold">Nguyễn Văn Chuẩn
              </span>
            </div>
          </div>

          <div _ngcontent-c8="" class="row mt-2">
            <div _ngcontent-c8="" class="col-md-6">
              Lớp:
              <span _ngcontent-c8="" class="font-weight-bold">19DTHD4</span>
            </div>

            <div _ngcontent-c8="" class="col-md-6">
              Ngày sinh:
              <span _ngcontent-c8="">13-01-2001</span>
            </div>
          </div>

          <div _ngcontent-c8="" class="row mt-2">
            <div _ngcontent-c8="" class="col-md-6">
              Khoa:
              <span _ngcontent-c8="" class="font-weight-bold">Khoa Công Nghệ Thông Tin</span>
            </div>

            <div _ngcontent-c8="" class="col-md-6">
              Chuyên ngành:
              <span _ngcontent-c8="" class="font-weight-bold">chưa có</span>
            </div>
          </div>

          <div _ngcontent-c8="" class="row  mt-2">
            <div _ngcontent-c8="" class="col-md-6">
              Niên khóa:
              <span _ngcontent-c8="">2019 - 2023</span>
            </div>
          </div>

          <div _ngcontent-c8="" class="row mt-4">
            <fieldset _ngcontent-c8="">
              <legend _ngcontent-c8="">
                <h6 _ngcontent-c8="" class="font-weight-bold ml-3 my-0">
                  THÔNG TIN SINH VIÊN
                </h6>
              </legend>
              <div _ngcontent-c8="" class="col-md-12">
                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Giới tính
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="gioi_tinh">
                      <option _ngcontent-c8="" value="">Chọn giới tính</option>
                      <option _ngcontent-c8="" value="0">Nam</option>
                      <option _ngcontent-c8="" value="1">Nữ</option>
                    </select>
                    
                  </div>
                  <div _ngcontent-c8="" class="col-md-2 margin-top">
                    <label _ngcontent-c8="" class="control-label">
                      Nơi sinh
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="noi_sinh">
                      <option _ngcontent-c8="" value="">Chọn Tỉnh/TP</option>
                      <option _ngcontent-c8="" value="89" class="ng-star-inserted">An Giang</option>
                      <option _ngcontent-c8="" value="77" class="ng-star-inserted">Bà Rịa - Vũng Tàu</option>
                      <option _ngcontent-c8="" value="74" class="ng-star-inserted">Bình Dương</option>
                      <option _ngcontent-c8="" value="70" class="ng-star-inserted">Bình Phước</option>
                      <option _ngcontent-c8="" value="60" class="ng-star-inserted">Bình Thuận</option>
                      <option _ngcontent-c8="" value="52" class="ng-star-inserted">Bình Định</option>
                      <option _ngcontent-c8="" value="95" class="ng-star-inserted">Bạc Liêu</option>
                      <option _ngcontent-c8="" value="24" class="ng-star-inserted">Bắc Giang</option>
                      <option _ngcontent-c8="" value="6" class="ng-star-inserted">Bắc Kạn</option>
                      <option _ngcontent-c8="" value="27" class="ng-star-inserted">Bắc Ninh</option>
                      <option _ngcontent-c8="" value="83" class="ng-star-inserted">Bến Tre</option>
                      <option _ngcontent-c8="" value="102" class="ng-star-inserted">CHLB Đức</option>
                      <option _ngcontent-c8="" value="100" class="ng-star-inserted">Campuchia</option>
                      <option _ngcontent-c8="" value="4" class="ng-star-inserted">Cao Bằng</option>
                      <option _ngcontent-c8="" value="96" class="ng-star-inserted">Cà Mau</option>
                      <option _ngcontent-c8="" value="92" class="ng-star-inserted">Cần Thơ</option>
                      <option _ngcontent-c8="" value="64" class="ng-star-inserted">Gia Lai</option>
                      <option _ngcontent-c8="" value="17" class="ng-star-inserted">Hoà Bình</option>
                      <option _ngcontent-c8="" value="99" class="ng-star-inserted">Hungary</option>
                      <option _ngcontent-c8="" value="2" class="ng-star-inserted">Hà Giang</option>
                      <option _ngcontent-c8="" value="35" class="ng-star-inserted">Hà Nam</option>
                      <option _ngcontent-c8="" value="1" class="ng-star-inserted">Hà Nội</option>
                      <option _ngcontent-c8="" value="97" class="ng-star-inserted">Hà Tây</option>
                      <option _ngcontent-c8="" value="42" class="ng-star-inserted">Hà Tĩnh</option>
                      <option _ngcontent-c8="" value="104" class="ng-star-inserted">Hàn Quốc</option>
                      <option _ngcontent-c8="" value="33" class="ng-star-inserted">Hưng Yên</option>
                      <option _ngcontent-c8="" value="30" class="ng-star-inserted">Hải Dương</option>
                      <option _ngcontent-c8="" value="31" class="ng-star-inserted">Hải Phòng</option>
                      <option _ngcontent-c8="" value="93" class="ng-star-inserted">Hậu Giang</option>
                      <option _ngcontent-c8="" value="79" class="ng-star-inserted">Hồ Chí Minh</option>
                      <option _ngcontent-c8="" value="98" class="ng-star-inserted">Hồng Kông</option>
                      <option _ngcontent-c8="" value="101" class="ng-star-inserted">Indonexia</option>
                      <option _ngcontent-c8="" value="56" class="ng-star-inserted">Khánh Hòa</option>
                      <option _ngcontent-c8="" value="91" class="ng-star-inserted">Kiên Giang</option>
                      <option _ngcontent-c8="" value="62" class="ng-star-inserted">Kon Tum</option>
                      <option _ngcontent-c8="" value="12" class="ng-star-inserted">Lai Châu</option>
                      <option _ngcontent-c8="" value="106" class="ng-star-inserted">Liên Bang Nga</option>
                      <option _ngcontent-c8="" value="80" class="ng-star-inserted">Long An</option>
                      <option _ngcontent-c8="" value="10" class="ng-star-inserted">Lào Cai</option>
                      <option _ngcontent-c8="" value="68" class="ng-star-inserted">Lâm Đồng</option>
                      <option _ngcontent-c8="" value="20" class="ng-star-inserted">Lạng Sơn</option>
                      <option _ngcontent-c8="" value="36" class="ng-star-inserted">Nam Định</option>
                      <option _ngcontent-c8="" value="40" class="ng-star-inserted">Nghệ An</option>
                      <option _ngcontent-c8="" value="107" class="ng-star-inserted">Nhật Bản</option>
                      <option _ngcontent-c8="" value="37" class="ng-star-inserted">Ninh Bình</option>
                      <option _ngcontent-c8="" value="58" class="ng-star-inserted">Ninh Thuận</option>
                      <option _ngcontent-c8="" value="25" class="ng-star-inserted">Phú Thọ</option>
                      <option _ngcontent-c8="" value="54" class="ng-star-inserted">Phú Yên</option>
                      <option _ngcontent-c8="" value="44" class="ng-star-inserted">Quảng Bình</option>
                      <option _ngcontent-c8="" value="49" class="ng-star-inserted">Quảng Nam</option>
                      <option _ngcontent-c8="" value="51" class="ng-star-inserted">Quảng Ngãi</option>
                      <option _ngcontent-c8="" value="22" class="ng-star-inserted">Quảng Ninh</option>
                      <option _ngcontent-c8="" value="45" class="ng-star-inserted">Quảng Trị</option>
                      <option _ngcontent-c8="" value="94" class="ng-star-inserted">Sóc Trăng</option>
                      <option _ngcontent-c8="" value="14" class="ng-star-inserted">Sơn La</option>
                      <option _ngcontent-c8="" value="38" class="ng-star-inserted">Thanh Hóa</option>
                      <option _ngcontent-c8="" value="34" class="ng-star-inserted">Thái Bình</option>
                      <option _ngcontent-c8="" value="19" class="ng-star-inserted">Thái Nguyên</option>
                      <option _ngcontent-c8="" value="108" class="ng-star-inserted">Thụy Sĩ</option>
                      <option _ngcontent-c8="" value="46" class="ng-star-inserted">Thừa Thiên Huế</option>
                      <option _ngcontent-c8="" value="82" class="ng-star-inserted">Tiền Giang</option>
                      <option _ngcontent-c8="" value="105" class="ng-star-inserted">Trung Quốc</option>
                      <option _ngcontent-c8="" value="84" class="ng-star-inserted">Trà Vinh</option>
                      <option _ngcontent-c8="" value="8" class="ng-star-inserted">Tuyên Quang</option>
                      <option _ngcontent-c8="" value="72" class="ng-star-inserted">Tây Ninh</option>
                      <option _ngcontent-c8="" value="86" class="ng-star-inserted">Vĩnh Long</option>
                      <option _ngcontent-c8="" value="26" class="ng-star-inserted">Vĩnh Phúc</option>
                      <option _ngcontent-c8="" value="15" class="ng-star-inserted">Yên Bái</option>
                      <option _ngcontent-c8="" value="11" class="ng-star-inserted">Điện Biên</option>
                      <option _ngcontent-c8="" value="48" class="ng-star-inserted">Đà Nẵng</option>
                      <option _ngcontent-c8="" value="103" class="ng-star-inserted">Đài Loan</option>
                      <option _ngcontent-c8="" value="66" class="ng-star-inserted">Đắk Lắk</option>
                      <option _ngcontent-c8="" value="67" class="ng-star-inserted">Đắk Nông</option>
                      <option _ngcontent-c8="" value="75" class="ng-star-inserted">Đồng Nai</option>
                      <option _ngcontent-c8="" value="87" class="ng-star-inserted">Đồng Tháp</option>
                    </select>
                  </div>
                </div>
                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Email
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <input _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="email" type="text"></input>
                  </div>
                  <div _ngcontent-c8="" class="col-md-2"></div>
                  <div _ngcontent-c8="" class="col-md-4"></div>
                </div>

                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Điện thoại
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <input _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="dien_thoai" type="text"></input>
                  </div>

                  <div _ngcontent-c8="" class="col-md-2 margin-top">
                    <label _ngcontent-c8="" class="control-label">
                      ĐT báo tin
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <input _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="dien_thoai_bao_tin_gap" type="text"></input>
                  </div>
                </div>
                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Số CMND
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <input _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="so_cmnd" type="text"></input>
                  </div>
                  <div _ngcontent-c8="" class="col-md-3 margin-top" title="Ngày cấp CMND">
                    <my-date-picker _ngcontent-c8="" formcontrolname="ngay_cap_cmnd" name="date_publish" class="ng-untouched ng-pristine ng-valid"><div class="mydp" style="width: 100%;">
                      <div class="selectiongroup ng-star-inserted">
                      <input autocomplete="off" autocorrect="off" class="selection inputnoteditable ng-untouched ng-pristine ng-valid ng-star-inserted" ngtype="text" spellcheck="false" aria-label="Date input field" placeholder="Ngày / tháng / năm" readonly="" style="height: 34px; font-size: 14px;"></input>
                      <div class="selbtngroup" style="height: 34px;"><button class="btnclear btnclearenabled ng-star-inserted" type="button" aria-label="Clear Date"><span class="mydpicon icon-mydpremove"></span></button> <button class="btnpicker btnpickerenabled" type="button" aria-label="Open Calendar"><span class="mydpicon icon-mydpcalendar"></span></button></div></div>
                      </div></my-date-picker>
                  </div>
                  <div _ngcontent-c8="" class="col-md-3 margin-top" title="Nơi cấp CMND">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="noi_cap_cmnd">
                      <option _ngcontent-c8="" value="">Chọn Nơi cấp</option>
                      <option _ngcontent-c8="" value="89" class="ng-star-inserted">An Giang</option>
                      <option _ngcontent-c8="" value="77" class="ng-star-inserted">Bà Rịa - Vũng Tàu</option>
                      <option _ngcontent-c8="" value="74" class="ng-star-inserted">Bình Dương</option>
                      <option _ngcontent-c8="" value="70" class="ng-star-inserted">Bình Phước</option>
                      <option _ngcontent-c8="" value="60" class="ng-star-inserted">Bình Thuận</option>
                      <option _ngcontent-c8="" value="52" class="ng-star-inserted">Bình Định</option>
                      <option _ngcontent-c8="" value="95" class="ng-star-inserted">Bạc Liêu</option>
                      <option _ngcontent-c8="" value="24" class="ng-star-inserted">Bắc Giang</option>
                      <option _ngcontent-c8="" value="6" class="ng-star-inserted">Bắc Kạn</option>
                      <option _ngcontent-c8="" value="27" class="ng-star-inserted">Bắc Ninh</option>
                      <option _ngcontent-c8="" value="83" class="ng-star-inserted">Bến Tre</option>
                      <option _ngcontent-c8="" value="102" class="ng-star-inserted">CHLB Đức</option>
                      <option _ngcontent-c8="" value="100" class="ng-star-inserted">Campuchia</option>
                      <option _ngcontent-c8="" value="4" class="ng-star-inserted">Cao Bằng</option>
                      <option _ngcontent-c8="" value="96" class="ng-star-inserted">Cà Mau</option>
                      <option _ngcontent-c8="" value="92" class="ng-star-inserted">Cần Thơ</option>
                      <option _ngcontent-c8="" value="64" class="ng-star-inserted">Gia Lai</option>
                      <option _ngcontent-c8="" value="17" class="ng-star-inserted">Hoà Bình</option>
                      <option _ngcontent-c8="" value="99" class="ng-star-inserted">Hungary</option>
                      <option _ngcontent-c8="" value="2" class="ng-star-inserted">Hà Giang</option>
                      <option _ngcontent-c8="" value="35" class="ng-star-inserted">Hà Nam</option>
                      <option _ngcontent-c8="" value="1" class="ng-star-inserted">Hà Nội</option>
                      <option _ngcontent-c8="" value="97" class="ng-star-inserted">Hà Tây</option>
                      <option _ngcontent-c8="" value="42" class="ng-star-inserted">Hà Tĩnh</option>
                      <option _ngcontent-c8="" value="104" class="ng-star-inserted">Hàn Quốc</option>
                      <option _ngcontent-c8="" value="33" class="ng-star-inserted">Hưng Yên</option>
                      <option _ngcontent-c8="" value="30" class="ng-star-inserted">Hải Dương</option>
                      <option _ngcontent-c8="" value="31" class="ng-star-inserted">Hải Phòng</option>
                      <option _ngcontent-c8="" value="93" class="ng-star-inserted">Hậu Giang</option>
                      <option _ngcontent-c8="" value="79" class="ng-star-inserted">Hồ Chí Minh</option>
                      <option _ngcontent-c8="" value="98" class="ng-star-inserted">Hồng Kông</option>
                      <option _ngcontent-c8="" value="101" class="ng-star-inserted">Indonexia</option>
                      <option _ngcontent-c8="" value="56" class="ng-star-inserted">Khánh Hòa</option>
                      <option _ngcontent-c8="" value="91" class="ng-star-inserted">Kiên Giang</option>
                      <option _ngcontent-c8="" value="62" class="ng-star-inserted">Kon Tum</option>
                      <option _ngcontent-c8="" value="12" class="ng-star-inserted">Lai Châu</option>
                      <option _ngcontent-c8="" value="106" class="ng-star-inserted">Liên Bang Nga</option>
                      <option _ngcontent-c8="" value="80" class="ng-star-inserted">Long An</option>
                      <option _ngcontent-c8="" value="10" class="ng-star-inserted">Lào Cai</option>
                      <option _ngcontent-c8="" value="68" class="ng-star-inserted">Lâm Đồng</option>
                      <option _ngcontent-c8="" value="20" class="ng-star-inserted">Lạng Sơn</option>
                      <option _ngcontent-c8="" value="36" class="ng-star-inserted">Nam Định</option>
                      <option _ngcontent-c8="" value="40" class="ng-star-inserted">Nghệ An</option>
                      <option _ngcontent-c8="" value="107" class="ng-star-inserted">Nhật Bản</option>
                      <option _ngcontent-c8="" value="37" class="ng-star-inserted">Ninh Bình</option>
                      <option _ngcontent-c8="" value="58" class="ng-star-inserted">Ninh Thuận</option>
                      <option _ngcontent-c8="" value="25" class="ng-star-inserted">Phú Thọ</option>
                      <option _ngcontent-c8="" value="54" class="ng-star-inserted">Phú Yên</option>
                      <option _ngcontent-c8="" value="44" class="ng-star-inserted">Quảng Bình</option>
                      <option _ngcontent-c8="" value="49" class="ng-star-inserted">Quảng Nam</option>
                      <option _ngcontent-c8="" value="51" class="ng-star-inserted">Quảng Ngãi</option>
                      <option _ngcontent-c8="" value="22" class="ng-star-inserted">Quảng Ninh</option>
                      <option _ngcontent-c8="" value="45" class="ng-star-inserted">Quảng Trị</option>
                      <option _ngcontent-c8="" value="94" class="ng-star-inserted">Sóc Trăng</option>
                      <option _ngcontent-c8="" value="14" class="ng-star-inserted">Sơn La</option>
                      <option _ngcontent-c8="" value="38" class="ng-star-inserted">Thanh Hóa</option>
                      <option _ngcontent-c8="" value="34" class="ng-star-inserted">Thái Bình</option>
                      <option _ngcontent-c8="" value="19" class="ng-star-inserted">Thái Nguyên</option>
                      <option _ngcontent-c8="" value="108" class="ng-star-inserted">Thụy Sĩ</option>
                      <option _ngcontent-c8="" value="46" class="ng-star-inserted">Thừa Thiên Huế</option>
                      <option _ngcontent-c8="" value="82" class="ng-star-inserted">Tiền Giang</option>
                      <option _ngcontent-c8="" value="105" class="ng-star-inserted">Trung Quốc</option>
                      <option _ngcontent-c8="" value="84" class="ng-star-inserted">Trà Vinh</option>
                      <option _ngcontent-c8="" value="8" class="ng-star-inserted">Tuyên Quang</option>
                      <option _ngcontent-c8="" value="72" class="ng-star-inserted">Tây Ninh</option>
                      <option _ngcontent-c8="" value="86" class="ng-star-inserted">Vĩnh Long</option>
                      <option _ngcontent-c8="" value="26" class="ng-star-inserted">Vĩnh Phúc</option>
                      <option _ngcontent-c8="" value="15" class="ng-star-inserted">Yên Bái</option>
                      <option _ngcontent-c8="" value="11" class="ng-star-inserted">Điện Biên</option>
                      <option _ngcontent-c8="" value="48" class="ng-star-inserted">Đà Nẵng</option>
                      <option _ngcontent-c8="" value="103" class="ng-star-inserted">Đài Loan</option>
                      <option _ngcontent-c8="" value="66" class="ng-star-inserted">Đắk Lắk</option>
                      <option _ngcontent-c8="" value="67" class="ng-star-inserted">Đắk Nông</option>
                      <option _ngcontent-c8="" value="75" class="ng-star-inserted">Đồng Nai</option>
                      <option _ngcontent-c8="" value="87" class="ng-star-inserted">Đồng Tháp</option>
                    </select>
                  </div>

                </div>

                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Quốc tịch
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>

                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <input _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="quoc_tich" type="text"></input>
                  </div>
                  <div _ngcontent-c8="" class="col-md-2"></div>
                  <div _ngcontent-c8="" class="col-md-4"></div>
                </div>
                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Dân tộc
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="dan_toc">
                      <option _ngcontent-c8="" value="">Chọn dân tộc</option>
                      <option _ngcontent-c8="" value="13" class="ng-star-inserted">Ba na</option>
                      <option _ngcontent-c8="" value="23" class="ng-star-inserted">Bru-Vân Kiều</option>
                      <option _ngcontent-c8="" value="51" class="ng-star-inserted">Brâu</option>
                      <option _ngcontent-c8="" value="48" class="ng-star-inserted">Bố Y</option>
                      <option _ngcontent-c8="" value="59" class="ng-star-inserted">Cao Lan</option>
                      <option _ngcontent-c8="" value="36" class="ng-star-inserted">Chu ru</option>
                      <option _ngcontent-c8="" value="17" class="ng-star-inserted">Chăm</option>
                      <option _ngcontent-c8="" value="32" class="ng-star-inserted">Chơ-ro</option>
                      <option _ngcontent-c8="" value="44" class="ng-star-inserted">Chứt</option>
                      <option _ngcontent-c8="" value="60" class="ng-star-inserted">Cil</option>
                      <option _ngcontent-c8="" value="30" class="ng-star-inserted">Co</option>
                      <option _ngcontent-c8="" value="57" class="ng-star-inserted">Co lao</option>
                      <option _ngcontent-c8="" value="16" class="ng-star-inserted">Cơ-ho</option>
                      <option _ngcontent-c8="" value="26" class="ng-star-inserted">Cơ-tu</option>
                      <option _ngcontent-c8="" value="47" class="ng-star-inserted">Cống</option>
                      <option _ngcontent-c8="" value="9" class="ng-star-inserted">Dao</option>
                      <option _ngcontent-c8="" value="10" class="ng-star-inserted">Gia-rai</option>
                      <option _ngcontent-c8="" value="56" class="ng-star-inserted">Giay</option>
                      <option _ngcontent-c8="" value="25" class="ng-star-inserted">Giáy</option>
                      <option _ngcontent-c8="" value="27" class="ng-star-inserted">Gié Triêng</option>
                      <option _ngcontent-c8="" value="8" class="ng-star-inserted">HMông</option>
                      <option _ngcontent-c8="" value="4" class="ng-star-inserted">Hoa</option>
                      <option _ngcontent-c8="" value="19" class="ng-star-inserted">Hrê</option>
                      <option _ngcontent-c8="" value="35" class="ng-star-inserted">Hà Nhì</option>
                      <option _ngcontent-c8="" value="33" class="ng-star-inserted">Kháng</option>
                      <option _ngcontent-c8="" value="55" class="ng-star-inserted">Không rõ</option>
                      <option _ngcontent-c8="" value="5" class="ng-star-inserted">Khơ-me</option>
                      <option _ngcontent-c8="" value="29" class="ng-star-inserted">Khơ-mú</option>
                      <option _ngcontent-c8="" value="1" class="ng-star-inserted">Kinh</option>
                      <option _ngcontent-c8="" value="38" class="ng-star-inserted">La Chí</option>
                      <option _ngcontent-c8="" value="39" class="ng-star-inserted">La Ha</option>
                      <option _ngcontent-c8="" value="41" class="ng-star-inserted">La Hủ</option>
                      <option _ngcontent-c8="" value="37" class="ng-star-inserted">Lào</option>
                      <option _ngcontent-c8="" value="43" class="ng-star-inserted">Lô Lô</option>
                      <option _ngcontent-c8="" value="42" class="ng-star-inserted">Lự</option>
                      <option _ngcontent-c8="" value="20" class="ng-star-inserted">Mnông</option>
                      <option _ngcontent-c8="" value="58" class="ng-star-inserted">Mán</option
                      ><option _ngcontent-c8="" value="6" class="ng-star-inserted">Mường</option>
                      <option _ngcontent-c8="" value="28" class="ng-star-inserted">Mạ</option>
                      <option _ngcontent-c8="" value="45" class="ng-star-inserted">Mảng</option>
                      <option _ngcontent-c8="" value="11" class="ng-star-inserted">Ngái</option>
                      <option _ngcontent-c8="" value="54" class="ng-star-inserted">Người nước ngoài</option>
                      <option _ngcontent-c8="" value="7" class="ng-star-inserted">Nùng</option>
                      <option _ngcontent-c8="" value="40" class="ng-star-inserted">Phù Lá</option>
                      <option _ngcontent-c8="" value="50" class="ng-star-inserted">Pu Péo</option>
                      <option _ngcontent-c8="" value="46" class="ng-star-inserted">Pà Thẻn</option>
                      <option _ngcontent-c8="" value="21" class="ng-star-inserted">Ra-glai</option>
                      <option _ngcontent-c8="" value="53" class="ng-star-inserted">Rơ măm</option>
                      <option _ngcontent-c8="" value="49" class="ng-star-inserted">Si La</option>
                      <option _ngcontent-c8="" value="15" class="ng-star-inserted">Sán Chay</option>
                      <option _ngcontent-c8="" value="18" class="ng-star-inserted">Sán Dìu</option>
                      <option _ngcontent-c8="" value="3" class="ng-star-inserted">Thái</option>
                      <option _ngcontent-c8="" value="24" class="ng-star-inserted">Thổ</option>
                      <option _ngcontent-c8="" value="31" class="ng-star-inserted">Tà-ôi</option>
                      <option _ngcontent-c8="" value="2" class="ng-star-inserted">Tày</option>
                      <option _ngcontent-c8="" value="34" class="ng-star-inserted">Xinh-mun</option>
                      <option _ngcontent-c8="" value="22" class="ng-star-inserted">Xtiêng</option>
                      <option _ngcontent-c8="" value="14" class="ng-star-inserted">Xơ-Đăng</option>
                      <option _ngcontent-c8="" value="12" class="ng-star-inserted">Ê-đê</option>
                      <option _ngcontent-c8="" value="52" class="ng-star-inserted">Ơ Đu</option>
                      <option _ngcontent-c8="" value="61" class="ng-star-inserted">Ấn Độ</option>
                    </select>
                  </div>
                  <div _ngcontent-c8="" class="col-md-2 margin-top">
                    <label _ngcontent-c8="" class="control-label">
                      Tôn giáo
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="ton_giao">
                      <option _ngcontent-c8="" value="">Chọn tôn giáo</option>
                      <option _ngcontent-c8="" value="9" class="ng-star-inserted">Bà La Môn</option><option _ngcontent-c8="" value="10" class="ng-star-inserted">Bà Ni</option><option _ngcontent-c8="" value="4" class="ng-star-inserted">Cao Đài</option><option _ngcontent-c8="" value="7" class="ng-star-inserted">Công giáo Roma</option><option _ngcontent-c8="" value="6" class="ng-star-inserted">Hòa Hảo</option><option _ngcontent-c8="" value="11" class="ng-star-inserted">Hồi giáo</option><option _ngcontent-c8="" value="8" class="ng-star-inserted">Khác</option><option _ngcontent-c8="" value="3" class="ng-star-inserted">Không</option><option _ngcontent-c8="" value="1" class="ng-star-inserted">Phật giáo</option><option _ngcontent-c8="" value="2" class="ng-star-inserted">Thiên Chúa giáo</option><option _ngcontent-c8="" value="5" class="ng-star-inserted">Tin lành</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div _ngcontent-c8="" class="row mt-4">
            <fieldset _ngcontent-c8="">
              <legend _ngcontent-c8="">
                <h6 _ngcontent-c8="" class="font-weight-bold ml-3 my-0">
                  ĐỊA CHỈ LIÊN LẠC
                </h6>
              </legend>


              <div _ngcontent-c8="" class="col-md-12">
                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class=" control-label">
                      Tỉnh/TP
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4" title="Tỉnh/TP liên lạc">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="tinh_ll">
                      <option _ngcontent-c8="" value="">Chọn Tỉnh/TP</option>
                      <option _ngcontent-c8="" value="89" class="ng-star-inserted">An Giang</option>
                      <option _ngcontent-c8="" value="77" class="ng-star-inserted">Bà Rịa - Vũng Tàu</option>
                      <option _ngcontent-c8="" value="74" class="ng-star-inserted">Bình Dương</option>
                      <option _ngcontent-c8="" value="70" class="ng-star-inserted">Bình Phước</option>
                      <option _ngcontent-c8="" value="60" class="ng-star-inserted">Bình Thuận</option>
                      <option _ngcontent-c8="" value="52" class="ng-star-inserted">Bình Định</option>
                      <option _ngcontent-c8="" value="95" class="ng-star-inserted">Bạc Liêu</option>
                      <option _ngcontent-c8="" value="24" class="ng-star-inserted">Bắc Giang</option>
                      <option _ngcontent-c8="" value="6" class="ng-star-inserted">Bắc Kạn</option>
                      <option _ngcontent-c8="" value="27" class="ng-star-inserted">Bắc Ninh</option>
                      <option _ngcontent-c8="" value="83" class="ng-star-inserted">Bến Tre</option>
                      <option _ngcontent-c8="" value="102" class="ng-star-inserted">CHLB Đức</option>
                      <option _ngcontent-c8="" value="100" class="ng-star-inserted">Campuchia</option>
                      <option _ngcontent-c8="" value="4" class="ng-star-inserted">Cao Bằng</option>
                      <option _ngcontent-c8="" value="96" class="ng-star-inserted">Cà Mau</option>
                      <option _ngcontent-c8="" value="92" class="ng-star-inserted">Cần Thơ</option>
                      <option _ngcontent-c8="" value="64" class="ng-star-inserted">Gia Lai</option>
                      <option _ngcontent-c8="" value="17" class="ng-star-inserted">Hoà Bình</option>
                      <option _ngcontent-c8="" value="99" class="ng-star-inserted">Hungary</option>
                      <option _ngcontent-c8="" value="2" class="ng-star-inserted">Hà Giang</option>
                      <option _ngcontent-c8="" value="35" class="ng-star-inserted">Hà Nam</option>
                      <option _ngcontent-c8="" value="1" class="ng-star-inserted">Hà Nội</option>
                      <option _ngcontent-c8="" value="97" class="ng-star-inserted">Hà Tây</option>
                      <option _ngcontent-c8="" value="42" class="ng-star-inserted">Hà Tĩnh</option>
                      <option _ngcontent-c8="" value="104" class="ng-star-inserted">Hàn Quốc</option>
                      <option _ngcontent-c8="" value="33" class="ng-star-inserted">Hưng Yên</option>
                      <option _ngcontent-c8="" value="30" class="ng-star-inserted">Hải Dương</option>
                      <option _ngcontent-c8="" value="31" class="ng-star-inserted">Hải Phòng</option>
                      <option _ngcontent-c8="" value="93" class="ng-star-inserted">Hậu Giang</option>
                      <option _ngcontent-c8="" value="79" class="ng-star-inserted">Hồ Chí Minh</option>
                      <option _ngcontent-c8="" value="98" class="ng-star-inserted">Hồng Kông</option>
                      <option _ngcontent-c8="" value="101" class="ng-star-inserted">Indonexia</option>
                      <option _ngcontent-c8="" value="56" class="ng-star-inserted">Khánh Hòa</option>
                      <option _ngcontent-c8="" value="91" class="ng-star-inserted">Kiên Giang</option>
                      <option _ngcontent-c8="" value="62" class="ng-star-inserted">Kon Tum</option>
                      <option _ngcontent-c8="" value="12" class="ng-star-inserted">Lai Châu</option>
                      <option _ngcontent-c8="" value="106" class="ng-star-inserted">Liên Bang Nga</option>
                      <option _ngcontent-c8="" value="80" class="ng-star-inserted">Long An</option>
                      <option _ngcontent-c8="" value="10" class="ng-star-inserted">Lào Cai</option>
                      <option _ngcontent-c8="" value="68" class="ng-star-inserted">Lâm Đồng</option>
                      <option _ngcontent-c8="" value="20" class="ng-star-inserted">Lạng Sơn</option>
                      <option _ngcontent-c8="" value="36" class="ng-star-inserted">Nam Định</option>
                      <option _ngcontent-c8="" value="40" class="ng-star-inserted">Nghệ An</option>
                      <option _ngcontent-c8="" value="107" class="ng-star-inserted">Nhật Bản</option>
                      <option _ngcontent-c8="" value="37" class="ng-star-inserted">Ninh Bình</option>
                      <option _ngcontent-c8="" value="58" class="ng-star-inserted">Ninh Thuận</option>
                      <option _ngcontent-c8="" value="25" class="ng-star-inserted">Phú Thọ</option>
                      <option _ngcontent-c8="" value="54" class="ng-star-inserted">Phú Yên</option>
                      <option _ngcontent-c8="" value="44" class="ng-star-inserted">Quảng Bình</option>
                      <option _ngcontent-c8="" value="49" class="ng-star-inserted">Quảng Nam</option>
                      <option _ngcontent-c8="" value="51" class="ng-star-inserted">Quảng Ngãi</option>
                      <option _ngcontent-c8="" value="22" class="ng-star-inserted">Quảng Ninh</option>
                      <option _ngcontent-c8="" value="45" class="ng-star-inserted">Quảng Trị</option>
                      <option _ngcontent-c8="" value="94" class="ng-star-inserted">Sóc Trăng</option>
                      <option _ngcontent-c8="" value="14" class="ng-star-inserted">Sơn La</option>
                      <option _ngcontent-c8="" value="38" class="ng-star-inserted">Thanh Hóa</option>
                      <option _ngcontent-c8="" value="34" class="ng-star-inserted">Thái Bình</option>
                      <option _ngcontent-c8="" value="19" class="ng-star-inserted">Thái Nguyên</option>
                      <option _ngcontent-c8="" value="108" class="ng-star-inserted">Thụy Sĩ</option>
                      <option _ngcontent-c8="" value="46" class="ng-star-inserted">Thừa Thiên Huế</option>
                      <option _ngcontent-c8="" value="82" class="ng-star-inserted">Tiền Giang</option>
                      <option _ngcontent-c8="" value="105" class="ng-star-inserted">Trung Quốc</option>
                      <option _ngcontent-c8="" value="84" class="ng-star-inserted">Trà Vinh</option>
                      <option _ngcontent-c8="" value="8" class="ng-star-inserted">Tuyên Quang</option>
                      <option _ngcontent-c8="" value="72" class="ng-star-inserted">Tây Ninh</option>
                      <option _ngcontent-c8="" value="86" class="ng-star-inserted">Vĩnh Long</option>
                      <option _ngcontent-c8="" value="26" class="ng-star-inserted">Vĩnh Phúc</option>
                      <option _ngcontent-c8="" value="15" class="ng-star-inserted">Yên Bái</option>
                      <option _ngcontent-c8="" value="11" class="ng-star-inserted">Điện Biên</option>
                      <option _ngcontent-c8="" value="48" class="ng-star-inserted">Đà Nẵng</option>
                      <option _ngcontent-c8="" value="103" class="ng-star-inserted">Đài Loan</option>
                      <option _ngcontent-c8="" value="66" class="ng-star-inserted">Đắk Lắk</option>
                      <option _ngcontent-c8="" value="67" class="ng-star-inserted">Đắk Nông</option>
                      <option _ngcontent-c8="" value="75" class="ng-star-inserted">Đồng Nai</option>
                      <option _ngcontent-c8="" value="87" class="ng-star-inserted">Đồng Tháp</option>
                      </select>
                  </div>

                </div>

                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Quốc tịch
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>

                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <input _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="quoc_tich" type="text"></input>

                  </div>
                  <div _ngcontent-c8="" class="col-md-2"></div>
                  <div _ngcontent-c8="" class="col-md-4"></div>
                </div>

                <div _ngcontent-c8="" class="row form-group">
                  <div _ngcontent-c8="" class="col-md-2">
                    <label _ngcontent-c8="" class="control-label">
                      Dân tộc
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="dan_toc">
                      <option _ngcontent-c8="" value="">Chọn dân tộc</option>
                      <option _ngcontent-c8="" value="13" class="ng-star-inserted">Ba na</option>
                      <option _ngcontent-c8="" value="23" class="ng-star-inserted">Bru-Vân Kiều</option>
                      <option _ngcontent-c8="" value="51" class="ng-star-inserted">Brâu</option>
                      <option _ngcontent-c8="" value="48" class="ng-star-inserted">Bố Y</option>
                      <option _ngcontent-c8="" value="59" class="ng-star-inserted">Cao Lan</option>
                      <option _ngcontent-c8="" value="36" class="ng-star-inserted">Chu ru</option>
                      <option _ngcontent-c8="" value="17" class="ng-star-inserted">Chăm</option>
                      <option _ngcontent-c8="" value="32" class="ng-star-inserted">Chơ-ro</option>
                      <option _ngcontent-c8="" value="44" class="ng-star-inserted">Chứt</option>
                      <option _ngcontent-c8="" value="60" class="ng-star-inserted">Cil</option>
                      <option _ngcontent-c8="" value="30" class="ng-star-inserted">Co</option>
                      <option _ngcontent-c8="" value="57" class="ng-star-inserted">Co lao</option>
                      <option _ngcontent-c8="" value="16" class="ng-star-inserted">Cơ-ho</option>
                      <option _ngcontent-c8="" value="26" class="ng-star-inserted">Cơ-tu</option>
                      <option _ngcontent-c8="" value="47" class="ng-star-inserted">Cống</option>
                      <option _ngcontent-c8="" value="9" class="ng-star-inserted">Dao</option>
                      <option _ngcontent-c8="" value="10" class="ng-star-inserted">Gia-rai</option>
                      <option _ngcontent-c8="" value="56" class="ng-star-inserted">Giay</option>
                      <option _ngcontent-c8="" value="25" class="ng-star-inserted">Giáy</option>
                      <option _ngcontent-c8="" value="27" class="ng-star-inserted">Gié Triêng</option>
                      <option _ngcontent-c8="" value="8" class="ng-star-inserted">HMông</option>
                      <option _ngcontent-c8="" value="4" class="ng-star-inserted">Hoa</option>
                      <option _ngcontent-c8="" value="19" class="ng-star-inserted">Hrê</option>
                      <option _ngcontent-c8="" value="35" class="ng-star-inserted">Hà Nhì</option>
                      <option _ngcontent-c8="" value="33" class="ng-star-inserted">Kháng</option>
                      <option _ngcontent-c8="" value="55" class="ng-star-inserted">Không rõ</option>
                      <option _ngcontent-c8="" value="5" class="ng-star-inserted">Khơ-me</option>
                      <option _ngcontent-c8="" value="29" class="ng-star-inserted">Khơ-mú</option>
                      <option _ngcontent-c8="" value="1" class="ng-star-inserted">Kinh</option>
                      <option _ngcontent-c8="" value="38" class="ng-star-inserted">La Chí</option>
                      <option _ngcontent-c8="" value="39" class="ng-star-inserted">La Ha</option>
                      <option _ngcontent-c8="" value="41" class="ng-star-inserted">La Hủ</option>
                      <option _ngcontent-c8="" value="37" class="ng-star-inserted">Lào</option>
                      <option _ngcontent-c8="" value="43" class="ng-star-inserted">Lô Lô</option>
                      <option _ngcontent-c8="" value="42" class="ng-star-inserted">Lự</option>
                      <option _ngcontent-c8="" value="20" class="ng-star-inserted">Mnông</option>
                      <option _ngcontent-c8="" value="58" class="ng-star-inserted">Mán</option>
                      <option _ngcontent-c8="" value="6" class="ng-star-inserted">Mường</option>
                      <option _ngcontent-c8="" value="28" class="ng-star-inserted">Mạ</option>
                      <option _ngcontent-c8="" value="45" class="ng-star-inserted">Mảng</option>
                      <option _ngcontent-c8="" value="11" class="ng-star-inserted">Ngái</option>
                      <option _ngcontent-c8="" value="54" class="ng-star-inserted">Người nước ngoài</option>
                      <option _ngcontent-c8="" value="7" class="ng-star-inserted">Nùng</option>
                      <option _ngcontent-c8="" value="40" class="ng-star-inserted">Phù Lá</option>
                      <option _ngcontent-c8="" value="50" class="ng-star-inserted">Pu Péo</option>
                      <option _ngcontent-c8="" value="46" class="ng-star-inserted">Pà Thẻn</option>
                      <option _ngcontent-c8="" value="21" class="ng-star-inserted">Ra-glai</option>
                      <option _ngcontent-c8="" value="53" class="ng-star-inserted">Rơ măm</option>
                      <option _ngcontent-c8="" value="49" class="ng-star-inserted">Si La</option>
                      <option _ngcontent-c8="" value="15" class="ng-star-inserted">Sán Chay</option>
                      <option _ngcontent-c8="" value="18" class="ng-star-inserted">Sán Dìu</option>
                      <option _ngcontent-c8="" value="3" class="ng-star-inserted">Thái</option>
                      <option _ngcontent-c8="" value="24" class="ng-star-inserted">Thổ</option>
                      <option _ngcontent-c8="" value="31" class="ng-star-inserted">Tà-ôi</option>
                      <option _ngcontent-c8="" value="2" class="ng-star-inserted">Tày</option>
                      <option _ngcontent-c8="" value="34" class="ng-star-inserted">Xinh-mun</option>
                      <option _ngcontent-c8="" value="22" class="ng-star-inserted">Xtiêng</option>
                      <option _ngcontent-c8="" value="14" class="ng-star-inserted">Xơ-Đăng</option>
                      <option _ngcontent-c8="" value="12" class="ng-star-inserted">Ê-đê</option>
                      <option _ngcontent-c8="" value="52" class="ng-star-inserted">Ơ Đu</option>
                      <option _ngcontent-c8="" value="61" class="ng-star-inserted">Ấn Độ</option>
                    </select>
                  </div>
                  <div _ngcontent-c8="" class="col-md-2 margin-top">
                    <label _ngcontent-c8="" class="control-label">
                      Tôn giáo
                      <span _ngcontent-c8="" class="text-danger">(*)</span>:
                    </label>
                  </div>
                  <div _ngcontent-c8="" class="col-md-4">
                    <select _ngcontent-c8="" class="form-control ng-untouched ng-pristine ng-valid" formcontrolname="ton_giao">
                      <option _ngcontent-c8="" value="">Chọn tôn giáo</option>
                      <option _ngcontent-c8="" value="9" class="ng-star-inserted">Bà La Môn</option>
                      <option _ngcontent-c8="" value="10" class="ng-star-inserted">Bà Ni</option>
                      <option _ngcontent-c8="" value="4" class="ng-star-inserted">Cao Đài</option>
                      <option _ngcontent-c8="" value="7" class="ng-star-inserted">Công giáo Roma</option>
                      <option _ngcontent-c8="" value="6" class="ng-star-inserted">Hòa Hảo</option>
                      <option _ngcontent-c8="" value="11" class="ng-star-inserted">Hồi giáo</option>
                      <option _ngcontent-c8="" value="8" class="ng-star-inserted">Khác</option>
                      <option _ngcontent-c8="" value="3" class="ng-star-inserted">Không</option>
                      <option _ngcontent-c8="" value="1" class="ng-star-inserted">Phật giáo</option>
                      <option _ngcontent-c8="" value="2" class="ng-star-inserted">Thiên Chúa giáo</option>
                      <option _ngcontent-c8="" value="5" class="ng-star-inserted">Tin lành</option>
                    </select>
                  </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </section>
          </div>
    </div>
  );
}
