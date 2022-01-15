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
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import AlertMessage from '../layouts/alert-message';
import Copyright from '../layouts/copyright';

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);
  let history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [alert, setAlert] = useState(null);
  const { firstName, lastName, username, email, password, confirmPassword } =
    registerForm;

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (username.includes(' ')) {
      setAlert({
        type: 'warning',
        message: 'Username không được có khoảng trắng',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (password.length < 6) {
      setAlert({
        type: 'warning',
        message: 'Mật khẩu không được ít hơn 6 ký tự',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (password !== confirmPassword) {
      setAlert({ type: 'warning', message: 'Mật khẩu không trùng khớp' });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    try {
      const registerData = await registerUser({
        ...registerForm,
        fullName: firstName + ' ' + lastName,
      });
      if (!registerData.success) {
        setAlert({ type: 'error', message: registerData.message });
        setTimeout(() => setAlert(null), 3000);
      } else {
        history.push('/activate-account');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Đăng Ký
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
        <AlertMessage info={alert} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Họ"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              onChange={onChangeRegisterForm}
              value={firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Tên"
              name="lastName"
              autoComplete="family-name"
              onChange={onChangeRegisterForm}
              value={lastName}
            />
          </Grid>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="email"
          onChange={onChangeRegisterForm}
          value={email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Tên đăng nhập"
          name="username"
          autoComplete="username"
          onChange={onChangeRegisterForm}
          value={username}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mật khẩu"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          onChange={onChangeRegisterForm}
          value={password}
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
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Nhập lại mật khẩu"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-confirmPassword"
          onChange={onChangeRegisterForm}
          value={confirmPassword}
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
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Đăng ký
        </Button>
        <Grid container>
          <Grid item xs></Grid>
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

export default RegisterForm;
