import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoHutech from '../../assets/logo.png';
import { landing$ } from '../../redux/selectors';
import { getPublicSubjects } from '../../redux/actions/landing';
import Copyright from './copyright';

const theme = createTheme();

export default function Landing() {
  const landing = useSelector(landing$);
  const dispatch = useDispatch(getPublicSubjects);

  useEffect(() => {
    dispatch(getPublicSubjects.getPublicSubjectsRequest());
  }, [dispatch]);

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
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={2}>
            {landing.data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Link to={`subjects/${item.id}`} component={CardActionArea}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ pt: '10px' }}
                      height="140"
                      image={item.image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h5">
                        {item.name}
                      </Typography>
                      <Typography>
                        {item.description.slice(0, 100)}...
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Môi trường học tập tiến bộ. <Copyright />
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
