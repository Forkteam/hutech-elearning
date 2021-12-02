// import RegisterForm from '../components/auth/RegisterForm';
// import ActivateAccount from '../components/auth/ActivateAccount';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import queryString from 'query-string';
import { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';
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
        {/* {authRoute === 'activate' && <ActivateAccount />} */}
        {authRoute === 'reset' && <ResetPassword />}
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              {body}
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Auth;
