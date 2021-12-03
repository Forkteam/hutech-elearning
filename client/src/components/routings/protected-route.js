import { useContext } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import Menu from '../layout/menu';

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
            <Menu component={Component} />
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
