import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHutech from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth-context';

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.neutral[200],
  boxShadow: theme.shadows[3],
}));

export const Navbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const [anchorElUser, setAnchorElUser] = useState(null);
  const {
    authState: {
      user: { username, avatar },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => {
    logoutUser();
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavbarRoot
      sx={{
        left: {
          lg: 250,
        },
        width: {
          lg: 'calc(100% - 250px)',
        },
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Link to="/">
          <img alt="HUTECH" src={LogoHutech} width="150px" />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Tooltip title="Mở cài đặt">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={username}
                src={
                  avatar
                    ? avatar
                    : 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                }
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Link to="/personal">
              <MenuItem>
                <Typography textAlign="center" color="#121828">
                  Thông tin cá nhân
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/support">
              <MenuItem>
                <Typography textAlign="center" color="#121828">
                  Hỗ trợ
                </Typography>
              </MenuItem>
            </Link>
            <MenuItem onClick={logout}>
              <Typography textAlign="center">Đăng xuất</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </NavbarRoot>
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
