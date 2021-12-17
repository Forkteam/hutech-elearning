import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import queryString from 'query-string';
import { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
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
      <div>
        <CircularProgress />
      </div>
    );
  } else if (isAuthenticated) {
    const { RedirectTo, studentId } = queryString.parse(location.search);
    return (
      <Redirect
        to={
          RedirectTo === undefined
            ? '/courses'
            : studentId === undefined
            ? RedirectTo
            : `${RedirectTo}&studentId=${studentId}`
        }
      />
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
              authRoute !== 'register' ? '-webkit-fill-available' : 'auto',
            borderRadius: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(https://source.unsplash.com/random)`,
          }}
        >
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 3,
                marginTop: 8,
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
