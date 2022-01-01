import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SquareIcon from '@mui/icons-material/Square';
import StarsIcon from '@mui/icons-material/Stars';
import { Avatar, Box, Card, Container, Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

const News = () => {
  return (
    <>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: 50,
          fontFamily: 'Arial',
          backgroundColor: '#CAC7C7',
          width: '94%',
          transform: 'translate(-50%, 0);',
          marginLeft: '50%',
          borderRadius: '10px',
          marginTop: '40px',
        }}
      >
        Tin Tức
      </Typography>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Box>
                <Box className="title">
                  <Avatar sx={{ bgcolor: 'Red', marginRight: 2 }}>
                    <NewspaperIcon />
                  </Avatar>
                  <Typography
                    sx={{
                      fontSize: 19,
                      fontFamily: 'Arial',
                    }}
                  >
                    Tin HUTECH
                  </Typography>
                </Box>
                <a href="/">
                  <img
                    className="img-responsive"
                    alt="HUTECH và Công ty Cổ phần Quốc tế SEM ký kết hợp tác"
                    src="https://file1.hutech.edu.vn/file/news/b5124141aecf18837e90e7470ce70e35.jpg"
                  ></img>
                  <Typography
                    sx={{
                      color: 'blue',
                      marginLeft: 2,
                      marginBottom: 1,
                      fontSize: 19,
                    }}
                    variant="h6"
                  >
                    HUTECH và Công ty Cổ phần Quốc tế SEM ký kết hợp tác
                  </Typography>
                </a>

                <Grid
                  sx={{
                    marginLeft: 2,
                    fontSize: 15,
                  }}
                >
                  Sáng nay (21/12), Khoa Tiếng Anh, Trường Đại học Công nghệ
                  TP.HCM (HUTECH) đã ký kết thỏa thuận hợp tác với Công ty Cổ
                  phần Quốc tế SEM, mở ra nhiều cơ hội học tập và việc làm cho
                  sinh viên ngành Ngôn ngữ Anh HUTECH trong thời gian tới.
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 2,
                  }}
                >
                  <hr></hr>
                  <a href="/">
                    <Typography>
                      <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                      Sinh viên HUTECH đánh giá rèn luyện cá nhân và cập nhật
                      thông tin ngoại trú từ 03/01/2022
                    </Typography>
                  </a>
                  <hr></hr>
                  <a href="/">
                    <Typography>
                      <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />{' '}
                      HUTECH Startup Wings - bước đệm vững chắc để sinh viên đến
                      với các sân chơi khởi nghiệp toàn quốc
                    </Typography>
                  </a>
                  <hr></hr>
                </Grid>
              </Box>
              <Box className="title">
                <Avatar sx={{ bgcolor: 'Red', marginRight: 2 }}>
                  <StarsIcon />
                </Avatar>
                <Typography
                  sx={{
                    fontSize: 19,
                    fontFamily: 'Arial',
                  }}
                >
                  Tin nổi bật
                </Typography>
              </Box>
              <Grid
                sx={{
                  marginLeft: 2,
                }}
              >
                <a href="/">
                  <Typography>
                    <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                    Tuyển sinh Đào tạo trình độ Thạc sĩ năm 2021 - Đợt 2{' '}
                    <img
                      alt=""
                      src="//www.hutech.edu.vn/s-img/newicon_vi.gif"
                    ></img>
                  </Typography>
                </a>
                <hr></hr>
                <a href="/">
                  <Typography>
                    <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                    Tuyển sinh Đào tạo trình độ Tiến sĩ năm 2021 - Đợt 1{' '}
                    <img
                      alt=""
                      src="//www.hutech.edu.vn/s-img/newicon_vi.gif"
                    ></img>
                  </Typography>
                </a>
                <hr></hr>
                <a href="/">
                  <Typography>
                    <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                    Thông tin tuyển dụng{' '}
                    <img
                      alt=""
                      src="//www.hutech.edu.vn/s-img/newicon_vi.gif"
                    ></img>
                  </Typography>
                </a>
                <hr></hr>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <Box className="title">
                <Avatar sx={{ bgcolor: 'Red', marginRight: 2 }}>
                  <MovieIcon />
                </Avatar>
                <Typography
                  sx={{
                    fontSize: 19,
                    fontFamily: 'Arial',
                  }}
                >
                  MEDIA
                </Typography>
              </Box>
              <div>
                <iframe
                  width="100%"
                  height="275"
                  src="https://www.youtube.com/embed/L-PzpG0xVuE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a href="/" style={{ margin: '5%' }}>
                Teaser Cuộc thi Thiết kế áo lớp 2022
              </a>
              <div className="video">
                <div>
                  <iframe
                    width="100%"
                    height="275"
                    src="https://www.youtube.com/embed/GE4IAgD40CA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <a href="/" style={{ margin: '5%' }}>
                [15' hiểu ngành] Tập 2: Khám phá ngành Công nghệ thông tin
              </a>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default News;
