/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import DatePicker from '@mui/lab/DatePicker';
import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../components/layouts/alert-message';
import { AuthContext } from '../contexts/auth-context';
import { showToast } from '../redux/actions';
import { updateUser } from '../redux/actions/users';
import { toast$ } from '../redux/selectors';
import Tooltip from '../components/overlays/tooltip';

export default function Personal() {
  const dispatch = useDispatch();
  const toast = useSelector(toast$);
  const {
    authState: { user },
    loadUser,
  } = useContext(AuthContext);
  const [alert, setAlert] = useState(null);
  const [data, setData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    birthday: user?.birthday || '',
    avatar: user?.avatar || '',
    id: user?.id,
    username: user?.username,
  });
  const { fullName, email, birthday, avatar } = data;

  useEffect(async () => {
    clearData();
    await loadUser();
  }, [toast]);

  const clearData = () => {
    document.getElementById('uploadCaptureInputFile').value = '';
    setData({
      ...data,
      fullName: user?.fullName || '',
      email: user?.email || '',
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

  const onChangeDate = (value) =>
    setData({ ...data, birthday: moment(value).utc() });

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      fullName === user?.fullName &&
      email === user?.email &&
      (avatar === user?.avatar || avatar === '') &&
      (birthday === user?.birthday || birthday === '')
    ) {
      console.log('nothing change');
      return;
    }
    if (!fullName) {
      setAlert({
        type: 'warning',
        message: 'Họ tên không được bỏ trống',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setAlert({
        type: 'warning',
        message: 'Email không hợp lệ',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    setAlert(null);
    dispatch(updateUser.updateUserRequest(data));
    dispatch(
      showToast({
        message: 'Please wait! We are updating...',
        type: 'warning',
      })
    );
    clearData();
  };

  return (
    <>
      <Tooltip toast={toast} />
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
                  <h4>THÔNG TIN CÁ NHÂN</h4>
                </legend>
                <div>
                  {alert && <AlertMessage info={alert} />}
                  {!alert && <AlertMessage info={toast} />}
                  <TextField
                    required
                    fullWidth
                    label="Họ và tên"
                    onChange={onChangeData}
                    name="fullName"
                    value={fullName}
                    sx={{ mb: 4 }}
                  />
                  <DatePicker
                    label="Ngày sinh"
                    value={birthday}
                    onChange={onChangeDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ mb: 4 }}
                        required
                        fullWidth
                      />
                    )}
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
    </>
  );
}
