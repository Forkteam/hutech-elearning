import { TextField, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export default function Personal() {
  return (
    <div className="personal">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <div className="div1">
            <Box className="box1">
              {' '}
              <img
                alt="img"
                src="https://i1.wp.com/www.polar-pinguin.berlin/wp-content/uploads/2017/12/image_preview.png?w=1080&ssl=1"
              ></img>
            </Box>
          </div>
          <div className="div2">
            <Box className="box2">
              Cập nhật gần nhất: 01 giờ 21 phút, ngày 31/12/2021{' '}
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <div className="div4">
            <Typography>
              <div className="row" style={{ marginBottom: '20px' }}>
                <Box className="box1">
                  <h4>
                    <div className="col-md-6" sx={{}}>
                      Mã số sinh viên:{' '}
                      <span className="font-weight-bold">1911064729</span>
                    </div>
                    <div className="col-md-6">
                      Họ tên:{' '}
                      <span className="font-weight-bold">Nguyễn Văn Chuẩn</span>
                    </div>
                    <div className="col-md-6">
                      Ngày sinh: <span>13-01-2001</span>
                    </div>
                    <div className="col-md-6">
                      Điện thoại: <span>0865562385</span>
                    </div>
                    <div className="col-md-6">
                      Email: <span>nguyenvanchuan13012001@gmail.com</span>
                    </div>
                  </h4>
                </Box>
              </div>
              <fieldset>
                <legend>
                  <h4 className="font-weight-bold ml-3 my-0">
                    THÔNG TIN SINH VIÊN
                  </h4>
                </legend>
                <div className="textField">
                  <TextField
                    required
                    id="outlined-required"
                    fullWidth
                    label="Họ và tên"
                    defaultValue="Nguyễn Văn Chuẩn"
                    sx={{ mb: 4 }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    fullWidth
                    label="Ngày sinh"
                    defaultValue="13/01/2001"
                    sx={{ mb: 4 }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    fullWidth
                    label="Email"
                    defaultValue="nguyenvanchuan13012001@gmail.com"
                    sx={{ mb: 4 }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    fullWidth
                    label="Điện thoại"
                    defaultValue="0865562385"
                    sx={{ mb: 4 }}
                  />
                </div>
              </fieldset>
              <div _ngcontent-c9="" class="cus_neo_div ng-star-inserted">
                <button
                  _ngcontent-c9=""
                  class="btn btn-primary"
                  type="button"
                  sx={{ background: 'rgba(23, 102, 171, 0.49)' }}
                >
                  Lưu thông tin
                </button>
              </div>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
