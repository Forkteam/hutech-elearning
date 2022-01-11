import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoHutech from '../assets/logo.png';
import About from '../components/landing/about';
import Contact from '../components/landing/contact';
import Footer from '../components/landing/footer';
import Home from '../components/landing/home';
import Sidebar from '../components/landing/sidebar';
import { getPublicSubjects } from '../redux/actions/landing';
import { landing$ } from '../redux/selectors';

export default function Landing({ route }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const landing = useSelector(landing$);
  const dispatch = useDispatch(getPublicSubjects);

  useEffect(() => {
    dispatch(getPublicSubjects.getPublicSubjectsRequest());
  }, [dispatch]);

  return (
    <>
      <Toolbar>
        <IconButton
          onClick={() => setSidebarOpen(true)}
          sx={{
            mr: 2,
            display: {
              xs: 'inline-flex',
              md: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
        <img alt="HUTECH" src={LogoHutech} width="150px" />
        <Container
          maxWidth="xs"
          className="navbar-landing"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
          }}
        >
          <Link to="/">
            <Typography component="h6" variant="h6" noWrap>
              trang chủ
            </Typography>
          </Link>
          <Link to="/about">
            <Typography component="h6" variant="h6" noWrap>
              giới thiệu
            </Typography>
          </Link>
          <Link to="/contact">
            <Typography component="h6" variant="h6" noWrap>
              liên hệ
            </Typography>
          </Link>
        </Container>
        <Typography
          sx={{ flex: 1, display: { sm: 'block', md: 'none' } }}
        ></Typography>
        <Link to="/login">
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: '#1976d2' }}
          >
            Đăng Nhập
          </Button>
        </Link>
      </Toolbar>
      <main style={{ backgroundColor: '#f5f5f0' }}>
        <Box
          sx={{
            position: 'relative',
            pt: 8,
            pb: 6,
            background:
              'url(https://file1.hutech.edu.vn/file/editor/homepage1/IMG_7760%284%29.jpg) no-repeat center / cover',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
              filter: 'blur(1px)',
            }}
          />
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              fontWeight="400"
              gutterBottom
              sx={{ position: 'relative' }}
            >
              Góc Học Tập
            </Typography>
            <Typography
              fontWeight="500"
              variant="h5"
              align="center"
              color="white"
              paragraph
              sx={{ position: 'relative' }}
            >
              Môi trường chia sẻ tài liệu học tập cho sinh viên, giúp nâng cao
              kiến thức chuyên môn, đạt thành tích tốt trong học tập.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to="/register">
                <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
                  Đăng Ký
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        {route === 'home' && <Home landing={landing} />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  );
}
