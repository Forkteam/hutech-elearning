/* eslint-disable react-hooks/exhaustive-deps */
import { TextField, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import moment from 'moment';
import 'moment/locale/vi';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/auth-context';
moment.locale('vi');

export default function Personal() {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [data, setData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthday: user?.birthday || '',
    avatar: user?.avatar || '',
    id: user?.id,
    username: user?.username,
  });
  const { fullName, email, phone, birthday, avatar } = data;
  let saveData;

  useEffect(() => {
    saveData = data;
  }, []);

  const clearData = () => {
    document.getElementById('uploadCaptureInputFile').value = '';
    setData({
      ...data,
      fullName: user?.fullName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      birthday: user?.birthday || '',
      avatar: user?.avatar || '',
    });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (event) => {
    const base64image = await toBase64(event.target.files[0]);
    setData({ ...data, avatar: base64image });
  };

  const onChangeData = (event) =>
    setData({ ...data, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (data === saveData) {
      console.log('nothing change');
      return;
    }
    console.log(data);
    clearData();
  };

  return (
    <div className="personal">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <div className="div1">
            <Box className="box1">
              {' '}
              <img
                alt="img"
                src={
                  avatar ||
                  'https://i1.wp.com/www.polar-pinguin.berlin/wp-content/uploads/2017/12/image_preview.png?w=1080&ssl=1'
                }
              ></img>
            </Box>
          </div>
          <div className="div2">
            <Box className="box2">
              Cập nhật gần nhất: {moment(user?.updatedAt).fromNow()}{' '}
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <div className="div4">
            <div className="row" style={{ marginBottom: '20px' }}>
              <Box>
                <Typography
                  sx={{ lineHeight: '30px', fontSize: '1rem' }}
                  component="h6"
                  variant="h6"
                >
                  Mã số {user?.role < 2 ? 'sinh' : 'nhân'} viên:{' '}
                  <span>{user?.code}</span>
                </Typography>
                <Typography
                  sx={{ lineHeight: '30px', fontSize: '1rem' }}
                  component="h6"
                  variant="h6"
                >
                  Họ tên: <span>{user?.fullName}</span>
                </Typography>
                <Typography
                  sx={{ lineHeight: '30px', fontSize: '1rem' }}
                  component="h6"
                  variant="h6"
                >
                  Ngày sinh: <span>{moment(user?.birthday).format('l')}</span>
                </Typography>
                <Typography
                  sx={{ lineHeight: '30px', fontSize: '1rem' }}
                  component="h6"
                  variant="h6"
                >
                  Điện thoại: <span>{user?.phone}</span>
                </Typography>
                <Typography
                  sx={{ lineHeight: '30px', fontSize: '1rem' }}
                  component="h6"
                  variant="h6"
                >
                  Email: <span>{user?.email}</span>
                </Typography>
                <Typography
                  sx={{ lineHeight: '30px', fontSize: '1rem' }}
                  component="h6"
                  variant="h6"
                >
                  Quyền truy cập:{' '}
                  <span>
                    {user?.role < 2
                      ? user?.isExternal
                        ? 'Khách'
                        : 'Sinh viên'
                      : user?.role > 2
                      ? 'Super admin'
                      : 'Admin'}
                  </span>
                </Typography>
              </Box>
            </div>
            <fieldset>
              <legend>
                <h4>THÔNG TIN {user?.role < 2 ? 'SINH' : 'NHÂN'} VIÊN</h4>
              </legend>
              <div>
                <TextField
                  required
                  fullWidth
                  label="Họ và tên"
                  onChange={onChangeData}
                  name="fullName"
                  value={fullName}
                  sx={{ mb: 4 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Ngày sinh"
                  onChange={onChangeData}
                  name="birthday"
                  value={birthday}
                  sx={{ mb: 4 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  onChange={onChangeData}
                  name="email"
                  value={email}
                  sx={{ mb: 4 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Điện thoại"
                  onChange={onChangeData}
                  name="phone"
                  value={phone}
                  sx={{ mb: 4 }}
                />
                <TextField
                  id="uploadCaptureInputFile"
                  margin="dense"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  fullWidth
                  variant="standard"
                  label="Ảnh"
                  helperText="Hãy chọn một bức ảnh thật đẹp"
                  name="avatar"
                  onChange={handleFileChange}
                />
              </div>
            </fieldset>
            <div className="cus_neo_div">
              <button onClick={clearData} style={{ marginRight: '15px' }}>
                Hủy thay đổi
              </button>
              <button onClick={onSubmit}>Lưu thông tin</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
