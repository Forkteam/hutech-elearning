import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import LogoHutech from '../../assets/logo.png';
import Copyright from './copyright';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const theme = createTheme();

export default function Album() {
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
          sx={{ flex: 1 }}
        >
          Đại Học Công Nghệ TP.HCM - HUTECH
        </Typography>
        <Button variant="outlined" size="medium">
          Đăng Nhập
        </Button>
      </Toolbar>
      <main style={{ backgroundColor: '#F3F4F6' }}>
        {/* Hero unit */}
        <Box
          sx={{
            position: 'relative',
            pt: 8,
            pb: 6,
            background:
              'url(https://file1.hutech.edu.vn/file/editor/homepage1/Khu%20E%20%288%29.jpg) no-repeat center/ cover',
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
              <Button variant="contained">Đăng Ký</Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10px',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Xem chi tiết</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Môi trường học tập tiến bộ. <Copyright />
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
