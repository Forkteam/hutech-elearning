import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import { Navbar } from '../layouts/navbar';
import { Sidebar } from '../layouts/sidebar';

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
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  if (authLoading) {
    return (
      <div
        style={{
          left: '50%',
          top: '50%',
          transform: 'translateY(-50%)',
          position: 'absolute',
        }}
      >
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
                  width: '100%',
                  height:
                    location.pathname.split('/')[1] !== 'subjects' &&
                    location.pathname.split('/')[2] !== 'lectures' &&
                    location.pathname.split('/')[1] !== 'news'
                      ? '100vh'
                      : '100%',
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
