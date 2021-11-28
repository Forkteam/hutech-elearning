import { useContext } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { AuthContext } from '../contexts/auth-context';
// import { Spinner } from 'react-bootstrap';
// import LoginForm from '../components/auth/LoginForm';
// import RegisterForm from '../components/auth/RegisterForm';
// import ActivateAccount from '../components/auth/ActivateAccount';
// import ResetPassword from '../components/auth/ResetPassword';

const Auth = ({ authRoute }) => {
  const location = useLocation();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;
  if (authLoading) {
    body = (
      <div className="spinner-container auth-form">
        {/* <Spinner animation="border" variant="info" /> */}
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
        {/* {authRoute === 'login' && <LoginForm />}
        {authRoute === 'register' && <RegisterForm />}
        {authRoute === 'activate' && <ActivateAccount />}
        {authRoute === 'reset' && <ResetPassword />} */}
        login/register page
      </>
    );
  }

  return (
    <>
      {authRoute === 'activate' || authRoute === 'reset' ? (
        <>{body}</>
      ) : (
        <>{body}</>
      )}
    </>
  );
};

export default Auth;
