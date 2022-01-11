import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = (props) => {
  const { open, onClose } = props;
  const location = useLocation();

  const items = [
    {
      href: '/',
      icon: <HomeIcon fontSize="small" />,
      title: 'Trang chủ',
    },
    {
      href: '/about',
      icon: <InfoIcon fontSize="small" />,
      title: 'Giới thiệu',
    },
    {
      href: '/contact',
      icon: <ContactSupportIcon fontSize="small" />,
      title: 'Liên hệ',
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
                  <ListItemText sx={{ flexGrow: 1 }}>{item.title}</ListItemText>
                </ListItem>
              </Link>
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );

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

export default Sidebar;
