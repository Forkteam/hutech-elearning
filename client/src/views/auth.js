import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import queryString from 'query-string';
import { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Image from '../assets/banner.jpg';
import ActivateAccount from '../components/auth/activate-account';
import LoginForm from '../components/auth/login-form';
import RegisterForm from '../components/auth/register-form';
import ResetPassword from '../components/auth/reset-password';
import { AuthContext } from '../contexts/auth-context';

const theme = createTheme();

const Auth = ({ authRoute }) => {
  const location = useLocation();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;
  if (authLoading) {
    body = (
      <div style={{ margin: 'auto' }}>
        <CircularProgress />
      </div>
    );
  } else if (isAuthenticated) {
    const { RedirectTo } = queryString.parse(location.search);
    return (
      <Redirect to={RedirectTo === undefined ? '/subjects' : RedirectTo} />
    );
  } else {
    body = (
      <>
        {authRoute === 'login' && <LoginForm />}
        {authRoute === 'register' && <RegisterForm />}
        {authRoute === 'activate' && <ActivateAccount />}
        {authRoute === 'reset' && <ResetPassword />}
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            position: 'absolute',
            width: '-webkit-fill-available',
            height:
              authRoute !== 'register' ? '-webkit-fill-available' : '120vh',
            borderRadius: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${Image})`,
          }}
        >
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 3,
                marginTop: 5,
                padding: 2,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'white',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              {body}
            </Box>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Auth;
