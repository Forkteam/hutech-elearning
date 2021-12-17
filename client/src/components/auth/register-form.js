import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Copyright from '../layout/copyright';
import { AuthContext } from '../../contexts/auth-context';
import AlertMessage from '../layout/alert-message';

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);
  let history = useHistory();
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

  const onSubmit = async (event) => {
    event.preventDefault();
    if (username.includes(' ')) {
      setAlert({
        type: 'warning',
        message: 'Username must not have white space',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (password.length < 6) {
      setAlert({
        type: 'warning',
        message: "Password mustn't be less than 6 characters",
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (password !== confirmPassword) {
      setAlert({ type: 'warning', message: 'Password does not match' });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    try {
      const registerData = await registerUser({
        ...registerForm,
        name: firstName + ' ' + lastName,
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
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
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
              label="Last Name"
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
          label="Username"
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
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={onChangeRegisterForm}
          value={password}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm password"
          type="password"
          autoComplete="current-confirmPassword"
          onChange={onChangeRegisterForm}
          value={confirmPassword}
        />
        <AlertMessage info={alert} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item>
            <Link to="/login" variant="body2">
              {'Already have an account? Sign In'}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default RegisterForm;
