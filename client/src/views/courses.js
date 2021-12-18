import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Courses = () => {
  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
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
              sx={{
                // 16:9
                pt: '10px',
              }}
              image="https://vnypc.files.wordpress.com/2016/11/html_css.jpg?w=300&h=200"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
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

        <Grid item xs={12} sm={6} md={4}>
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
              sx={{
                // 16:9
                pt: '10px',
              }}
              image="https://thienanblog.com/wp-content/uploads/2015/04/javascript_logo.png"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
              javascript
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

        <Grid item xs={12} sm={6} md={4}>
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
              sx={{
                // 16:9
                pt: '10px',
              }}
              image="https://zigexn-ventura.github.io/assets/images/react-logo.png"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
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

        <Grid item xs={12} sm={6} md={4}>
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
              sx={{
                // 16:9
                pt: '10px',
              }}
              image="https://bachasoftware.com/wp-content/uploads/elementor/thumbs/nodejslogo-p3zvdhaajh0bxurlgqp1gszveuzuf58gd4auf7uve8.png"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
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

        <Grid item xs={12} sm={6} md={4}>
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
              sx={{
                // 16:9
                pt: '10px',
              }}
              image="https://laptrinhcanban.com/css/images/page/java-co-ban-cho-nguoi-moi-bat-dau.webp?ezimgfmt=rs%3Adevice%2Frscb2-1"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
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

        <Grid item xs={12} sm={6} md={4}>
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
              sx={{
                // 16:9
                pt: '10px',
              }}
              image="https://laptrinhcanban.com/css/images/page/c-programe.webp?ezimgfmt=rs%3Adevice%2Frscb2-1"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                C
              </Typography>
              <Typography>
              Ngôn ngữ lập trình C là một ngôn ngữ mệnh lệnh được phát triển từ đầu thập niên 1970 bởi Dennis Ritchie để dùng trong hệ điều hành UNIX. Từ đó, ngôn ngữ này đã lan rộng ra nhiều hệ điều hành khác và trở thành một những ngôn ngữ phổ dụng nhất.              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Xem chi tiết</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default Courses;
