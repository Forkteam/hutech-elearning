import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SaveIcon from '@mui/icons-material/Save';
import WorkIcon from '@mui/icons-material/Work';
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
import { Link, useLocation } from 'react-router-dom';

const items = [
  {
    href: '/courses',
    icon: <HomeIcon fontSize="small" />,
    title: 'Trang chủ',
  },
  {
    href: '/',
    icon: <AccountBoxIcon fontSize="small" />,
    title: 'Thông tin cá nhân',
  },
  {
    href: '/',
    icon: <SaveIcon fontSize="small" />,
    title: 'Bài học đã lưu',
  },
  {
    href: '/',
    icon: <BookIcon fontSize="small" />,
    title: 'Tài liệu',
  },
  {
    href: '/',
    icon: <NewspaperIcon fontSize="small" />,
    title: 'Tin tức HUTECH',
  },
  {
    href: '/',
    icon: <ChatIcon fontSize="small" />,
    title: 'Blog chia sẻ',
  },
  {
    href: '/',
    icon: <WorkIcon fontSize="small" />,
    title: 'Tìm kiếm công việc',
  },
];

export const Sidebar = (props) => {
  const { open, onClose } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

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
            <>
              {index === 4 && (
                <Divider
                  sx={{
                    borderColor: '#2D3748',
                    m: 1,
                  }}
                />
              )}
              <Link to={item.href} passHref>
                <ListItem
                  sx={{
                    backgroundColor:
                      location.pathname === item.href &&
                      'rgba(255,255,255, 0.08)',
                    borderRadius: 1,
                    color:
                      location.pathname === item.href
                        ? 'secondary.main'
                        : 'neutral.300',
                    fontWeight:
                      location.pathname === item.href && 'fontWeightBold',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                      color:
                        location.pathname === item.href
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
            </>
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
