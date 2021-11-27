import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context';
import { Route, useHistory, useLocation } from 'react-router-dom';

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
            <Component {...rest} {...props} />
          </>
        ) : (
          history.push(
            `/login?redirectTo=${location.pathname}${location.search}`
          )
        )
      }
    />
  );
};

export default ProtectedRoute;
