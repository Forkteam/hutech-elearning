import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import { Navbar } from '../layout/navbar';
import { Sidebar } from '../layout/sidebar';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 250,
  },
}));

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const location = useLocation();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  if (authLoading) {
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <LayoutRoot>
              <Box
                sx={{
                  display: 'flex',
                  flex: '1 1 auto',
                  flexDirection: 'column',
                  width: '100%',
                  bgcolor: '#f5f5f0',
                }}
              >
                <Component {...rest} {...props} />
              </Box>
            </LayoutRoot>
            <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
            <Sidebar
              onClose={() => setSidebarOpen(false)}
              open={isSidebarOpen}
            />
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
