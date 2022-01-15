import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import queryString from 'query-string';
import { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import AlertMessage from '../layouts/alert-message';
import Copyright from '../layouts/copyright';

const ResetPassword = () => {
  const history = useHistory();
  const location = useLocation();
  const { token, id } = queryString.parse(location.search);
  const { sendMailResetPassword, resetPassword } = useContext(AuthContext);
  const [alert, setAlert] = useState(null);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resetPasswordForm, setResetPasswordForm] = useState({
    token,
    id,
    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword } = resetPasswordForm;

  const onChangePasswordForm = (event) =>
    setResetPasswordForm({
      ...resetPasswordForm,
      [event.target.name]: event.target.value,
    });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let registerData;
      if (token === undefined || id === undefined) {
        registerData = await sendMailResetPassword(email);
        setAlert({ type: 'warning', message: 'Please wait' });
        setTimeout(() => setAlert(null), 1000);
      } else {
        if (password.length < 6) {
          setAlert({
            type: 'error',
            message: 'Mật khẩu phải có ít nhất 6 ký tự.',
          });
          setTimeout(() => setAlert(null), 5000);
          return;
        }
        if (password !== confirmPassword) {
          setAlert({ type: 'error', message: 'Mật khảu không đúng' });
          setTimeout(() => setAlert(null), 5000);
          return;
        }
        registerData = await resetPassword(resetPasswordForm);
        setAlert({ type: 'warning', message: 'Please wait' });
        setTimeout(() => setAlert(null), 1000);
      }
      if (!registerData.success) {
        setAlert({ type: 'error', message: registerData.message });
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({ type: 'success', message: registerData.message });
        setTimeout(() => {
          setAlert(null);
          history.push('/login');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let body;
  if (token === undefined || id === undefined) {
    body = (
      <>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Gửi liên kết đến email
        </Button>
      </>
    );
  } else {
    body = (
      <>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mật khẩu"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          onChange={onChangePasswordForm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={password}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Nhập lại mật khẩu"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-confirmPassword"
          onChange={onChangePasswordForm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={confirmPassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Đổi mật khẩu
        </Button>
      </>
    );
  }

  return (
    <>
      <Typography component="h1" variant="h5">
        Quên mật khẩu
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ mt: 1, width: '-webkit-fill-available' }}
      >
        <AlertMessage info={alert} />
        {body}
        <Grid container>
          <Grid item>
            <Link to="/login" variant="body2">
              {'Bạn đã có tài khoản? Đăng nhập'}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default ResetPassword;
