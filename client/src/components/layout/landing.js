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
import LogoHutech from '../../assets/logo.png';
import Copyright from './copyright';


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
        <Button variant="contained" size="medium">
          Đăng Nhập
        </Button>
      </Toolbar>
      <main
        style={{
          backgroundColor:
            '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        }}
      >
        {/* Hero unit */}
        <Box
          sx={{
            position: 'relative',
            pt: 8,
            pb: 6,
            background:
              'url(https://file1.hutech.edu.vn/file/editor/homepage1/IMG_7760%284%29.jpg) no-repeat center/ cover',
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

              <Grid  xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',                  
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      m: '15px',
                    }}
                    image="https://vnypc.files.wordpress.com/2016/11/html_css.jpg?w=300&h=200"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='darkblue' align='center'>
                      HTML/CSS
                    </Typography>
                    <Typography>
                      HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản, CSS (hay Cascading Style Sheet language) được định nghĩa là ngôn ngữ tạo phong cách cho trang web.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Xem chi tiết</Button>
                  </CardActions>
                </Card>
              </Grid>    
              <Grid  xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',                  
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      m: '15px',
                    }}
                    image="https://thienanblog.com/wp-content/uploads/2015/04/javascript_logo.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='darkblue' align='center'>
                      Javascript
                    </Typography>
                    <Typography>
                      JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như phía máy chủ.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Xem chi tiết</Button>
                  </CardActions>
                </Card>
              </Grid>    
              <Grid  xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',                  
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      m: '15px',
                    }}
                    image="https://zigexn-ventura.github.io/assets/images/react-logo.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='darkblue' align='center'>
                      React JS
                    </Typography>
                    <Typography>
                      Được dịch từ tiếng Anh-React là một thư viện JavaScript front-end mã nguồn mở miễn phí để xây dựng giao diện người dùng dựa trên các thành phần UI. Nó được duy trì bởi Meta và một cộng đồng các nhà phát triển và công ty cá nhân. React có thể được sử dụng như một cơ sở để phát triển các ứng dụng trang đơn hoặc di động.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Xem chi tiết</Button>
                  </CardActions>
                </Card>
              </Grid>    
              <Grid  xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',                  
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      m: '15px',
                    }}
                    image="https://bachasoftware.com/wp-content/uploads/elementor/thumbs/nodejslogo-p3zvdhaajh0bxurlgqp1gszveuzuf58gd4auf7uve8.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='darkblue' align='center'>
                      Node JS
                    </Typography>
                    <Typography>
                      Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Xem chi tiết</Button>
                  </CardActions>
                </Card>
              </Grid>    
              <Grid  xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',                  
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      m: '15px',
                    }}
                    image="https://laptrinhcanban.com/css/images/page/java-co-ban-cho-nguoi-moi-bat-dau.webp?ezimgfmt=rs%3Adevice%2Frscb2-1"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='darkblue' align='center'>
                      Java
                    </Typography>
                    <Typography>
                      Java là một ngôn ngữ lập trình hướng đối tượng, dựa trên lớp được thiết kế để có càng ít phụ thuộc thực thi càng tốt.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Xem chi tiết</Button>
                  </CardActions>
                </Card>
              </Grid>    
              <Grid  xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',                  
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      m: '15px',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='darkblue' align='center'>
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
