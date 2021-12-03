import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context';
import { Route, useHistory, useLocation } from 'react-router-dom';
import NavbarMenu from '../layout/navbar-menu';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const location = useLocation();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="spinner-container">
        {/* <Spinner animation="border" variant="info" /> */}
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <NavbarMenu />
            <Component {...rest} {...props} />
          </>
        ) : (
          history.push(
            `/login?RedirectTo=${location.pathname}${location.search}`
          )
        )
      }
    />
  );
};

export default ProtectedRoute;
