import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';
import SubjectIcon from '@mui/icons-material/Subject';
import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { Fragment, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';

export const Sidebar = (props) => {
  const { open, onClose } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });
  const {
    authState: { user },
  } = useContext(AuthContext);

  const items = [
    {
      href: '/subjects',
      icon: <SubjectIcon fontSize="small" />,
      title: 'Danh sách môn học',
    },
    {
      href: '/user-subjects',
      icon: <BookIcon fontSize="small" />,
      title: user?.role < 2 ? 'Môn học đã lưu' : 'Môn học đã tạo',
    },
    {
      href: '/industries',
      icon: <ConstructionIcon fontSize="small" />,
      title: 'Danh sách ngành học',
    },
    {
      href: '/students',
      icon: <SchoolIcon fontSize="small" />,
      title: 'Danh sách tài khoản',
    },
    {
      href: '/admins',
      icon: <GroupIcon fontSize="small" />,
      title: 'Danh sách admin',
    },
    {
      href: '/news',
      icon: <NewspaperIcon fontSize="small" />,
      title: 'Tin tức',
    },
    {
      href: '/personal',
      icon: <AccountBoxIcon fontSize="small" />,
      title: 'Thông tin cá nhân',
    },
    {
      href: '/support',
      icon: <HelpIcon fontSize="small" />,
      title: 'Hỗ trợ',
    },
  ];

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: 3 }}></Box>
        <Divider
          sx={{
            borderColor: '#2D3748',
            mb: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item, index) => (
            <Fragment key={index}>
              {index === 5 && (
                <Divider
                  sx={{
                    borderColor: '#2D3748',
                    m: 1,
                  }}
                />
              )}
              {index === 4 || index === 3 ? (
                user?.role > 1 ? (
                  <Link to={item.href}>
                    <ListItem
                      sx={{
                        backgroundColor:
                          location.pathname.split('/')[1] ===
                            item.href.split('/')[1] &&
                          'rgba(255,255,255, 0.08)',
                        borderRadius: 1,
                        color:
                          location.pathname.split('/')[1] ===
                          item.href.split('/')[1]
                            ? 'secondary.main'
                            : 'neutral.300',
                        fontWeight:
                          location.pathname.split('/')[1] ===
                            item.href.split('/')[1] && 'fontWeightBold',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                          color:
                            location.pathname.split('/')[1] ===
                            item.href.split('/')[1]
                              ? 'secondary.main'
                              : 'neutral.400',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255, 0.08)',
                        },
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText sx={{ flexGrow: 1 }}>
                        {item.title}
                      </ListItemText>
                    </ListItem>
                  </Link>
                ) : (
                  <></>
                )
              ) : (
                <Link to={item.href}>
                  <ListItem
                    sx={{
                      backgroundColor:
                        location.pathname.split('/')[1] ===
                          item.href.split('/')[1] && 'rgba(255,255,255, 0.08)',
                      borderRadius: 1,
                      color:
                        location.pathname.split('/')[1] ===
                        item.href.split('/')[1]
                          ? 'secondary.main'
                          : 'neutral.300',
                      fontWeight:
                        location.pathname.split('/')[1] ===
                          item.href.split('/')[1] && 'fontWeightBold',
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      textTransform: 'none',
                      width: '100%',
                      '& .MuiButton-startIcon': {
                        color:
                          location.pathname.split('/')[1] ===
                          item.href.split('/')[1]
                            ? 'secondary.main'
                            : 'neutral.400',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)',
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText sx={{ flexGrow: 1 }}>
                      {item.title}
                    </ListItemText>
                  </ListItem>
                </Link>
              )}
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: '250px',
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: '250px',
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
