/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import StarIcon from '@mui/icons-material/Star';
import DatePicker from '@mui/lab/DatePicker';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AlertMessage from '../components/layouts/alert-message';
import Tooltip from '../components/layouts/tooltip';
import { AuthContext } from '../contexts/auth-context';
import { showToast } from '../redux/actions';
import { updateUser } from '../redux/actions/users';
import { toast$ } from '../redux/selectors';

export default function Personal() {
  const history = useHistory();
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
        message: 'H??? t??n kh??ng ???????c b??? tr???ng',
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
        message: 'Email kh??ng h???p l???',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    setAlert(null);
    dispatch(updateUser.updateUserRequest(data));
    dispatch(
      showToast({
        message: 'Vui l??ng ch???! D??? li???u ??ang ???????c c???p nh???t...',
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
                C???p nh???t g???n nh???t: {moment(user?.updatedAt).fromNow()}{' '}
              </Box>
            </div>
            {user?.role < 2 && user?.isExternal === true && (
              <Button
                variant="contained"
                color="warning"
                endIcon={<StarIcon />}
                sx={{ margin: 2, width: '-webkit-fill-available' }}
                onClick={() => history.push('/upgrade')}
              >
                N??ng c???p t??i kho???n
              </Button>
            )}
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
                    M?? s??? {user?.role < 2 ? 'sinh' : 'nh??n'} vi??n:{' '}
                    <span>{user?.code}</span>
                  </Typography>
                  <Typography
                    sx={{ lineHeight: '30px', fontSize: '1rem' }}
                    component="h6"
                    variant="h6"
                  >
                    H??? t??n: <span>{user?.fullName}</span>
                  </Typography>
                  <Typography
                    sx={{ lineHeight: '30px', fontSize: '1rem' }}
                    component="h6"
                    variant="h6"
                  >
                    Ng??y sinh: <span>{moment(user?.birthday).format('l')}</span>
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
                    Quy???n truy c???p:{' '}
                    <span>
                      {user?.role < 2
                        ? user?.isExternal
                          ? 'Kh??ch'
                          : 'Sinh vi??n'
                        : user?.role > 2
                        ? 'Super admin'
                        : 'Admin'}
                    </span>
                  </Typography>
                </Box>
              </div>
              <fieldset>
                <legend>
                  <h4>TH??NG TIN C?? NH??N</h4>
                </legend>
                <div>
                  {alert && <AlertMessage info={alert} />}
                  {!alert && <AlertMessage info={toast} />}
                  <TextField
                    required
                    fullWidth
                    label="H??? v?? t??n"
                    onChange={onChangeData}
                    name="fullName"
                    value={fullName}
                    sx={{ mb: 4 }}
                  />
                  <DatePicker
                    label="Ng??y sinh"
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
                    label="???nh"
                    helperText="H??y ch???n m???t b???c ???nh th???t ?????p"
                    name="avatar"
                    onChange={handleFileChange}
                  />
                </div>
              </fieldset>
              <div className="cus_neo_div">
                <button onClick={clearData} style={{ marginRight: '15px' }}>
                  H???y thay ?????i
                </button>
                <button onClick={onSubmit}>L??u th??ng tin</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
