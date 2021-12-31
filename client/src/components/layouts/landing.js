import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LogoHutech from '../../assets/logo.png';
import Subjects from '../../views/subjects';
import Copyright from './copyright';

const theme = createTheme();

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toolbar>
        <img alt="HUTECH" src={LogoHutech} width="150px" />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          Đại Học Công Nghệ TP.HCM - HUTECH
        </Typography>
        <Typography
          sx={{ flex: 1, display: { sm: 'block', md: 'none' } }}
        ></Typography>
        <Link to="/login">
          <Button variant="contained" size="medium">
            Đăng Nhập
          </Button>
        </Link>
      </Toolbar>
      <main style={{ backgroundColor: '#f5f5f0' }}>
        {/* Hero unit */}
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
                <Button variant="contained">Đăng Ký</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Subjects />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Môi trường học tập tiến bộ. <Copyright />
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
