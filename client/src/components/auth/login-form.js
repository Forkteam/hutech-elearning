import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import AlertMessage from '../layouts/alert-message';
import Copyright from '../layouts/copyright';

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const [alert, setAlert] = useState(null);
  const { username, password } = loginForm;

  const onChangeLoginForm = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        setAlert({ type: 'error', message: loginData.message });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Đăng Nhập
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email hoặc Tên đăng nhập"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={onChangeLoginForm}
          value={username}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mật khẩu"
          type="password"
          autoComplete="current-password"
          onChange={onChangeLoginForm}
          value={password}
        />
        <AlertMessage info={alert} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Đăng Nhập
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/reset-password" variant="body2">
              Quên mật khẩu?
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register" variant="body2">
              {'Bạn chưa có tài khoản? Đăng ký'}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default LoginForm;
