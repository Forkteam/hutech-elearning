import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SquareIcon from '@mui/icons-material/Square';
import StarsIcon from '@mui/icons-material/Stars';
import Avatar from '@mui/material/Avatar';
import MuiGrid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function News() {
  return (
    <div>
      <Typography
        sx={{
          margin: 2,
          fontSize: 50,
          fontFamily: 'Arial',
        }}
      >
        Tin Tức
      </Typography>

      <div className="News">
        <Box
          className="Box1"
          sx={{
            display: 'grid',
            boxShadow: 3,
            marginBottom: 1,
            paddingLeft: 2,
            paddingTop: 1,
            paddingBottom: 1,
            borderRadius: 2,
            flexDirection: 'row',
            alignItems: 'center',
            background: 'White',
          }}
        >
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
          <a href="#">
            <img
              class="img-responsive"
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
            Sáng nay (21/12), Khoa Tiếng Anh, Trường Đại học Công nghệ TP.HCM
            (HUTECH) đã ký kết thỏa thuận hợp tác với Công ty Cổ phần Quốc tế
            SEM, mở ra nhiều cơ hội học tập và việc làm cho sinh viên ngành Ngôn
            ngữ Anh HUTECH trong thời gian tới.
          </Grid>

          <Grid
            sx={{
              marginLeft: 2,
            }}
          >
            <hr></hr>
            <a href="#">
              <Typography>
                <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                Sinh viên HUTECH đánh giá rèn luyện cá nhân và cập nhật thông
                tin ngoại trú từ 03/01/2022
              </Typography>
            </a>
            <hr></hr>
            <a href="#">
              <Typography>
                <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} /> HUTECH
                Startup Wings - bước đệm vững chắc để sinh viên đến với các sân
                chơi khởi nghiệp toàn quốc
              </Typography>
            </a>
            <hr></hr>
          </Grid>
        </Box>
        <Box
          className="Box2"
          sx={{
            boxShadow: 3,
            marginBottom: 1,
            paddingLeft: 2,
            paddingTop: 1,
            paddingBottom: 1,
            borderRadius: 2,
            flexDirection: 'row',
            alignItems: 'center',
            background: 'White',
          }}
        >
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
            <a href="#">
              <Typography>
                <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                Tuyển sinh Đào tạo trình độ Thạc sĩ năm 2021 - Đợt 2{' '}
                <img src="//www.hutech.edu.vn/s-img/newicon_vi.gif"></img>
              </Typography>
            </a>
            <hr></hr>
            <a href="#">
              <Typography>
                <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                Tuyển sinh Đào tạo trình độ Tiến sĩ năm 2021 – Đợt 1{' '}
                <img src="//www.hutech.edu.vn/s-img/newicon_vi.gif"></img>
              </Typography>
            </a>
            <hr></hr>
            <a href="#">
              <Typography>
                <SquareIcon sx={{ fontSize: 10, marginRight: 2 }} />
                Thông tin tuyển dụng{' '}
                <img src="//www.hutech.edu.vn/s-img/newicon_vi.gif"></img>
              </Typography>
            </a>
            <hr></hr>
          </Grid>
        </Box>
        <Box
          className="Box3"
          sx={{
            marginBottom: 1,
            paddingLeft: 2,
            paddingTop: 1,
            paddingBottom: 1,
            borderRadius: 2,
            flexDirection: 'row',
            alignItems: 'center',
            background: 'White',
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
          <Grid
            sx={{
              marginLeft: 2,
            }}
          >
            <div className="video">
              <div>
                <iframe
                  width="396"
                  height="210"
                  src="https://www.youtube.com/embed/GE4IAgD40CA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <br></br>
                <a href="#">
                  [15' hiểu ngành] Tập 2: Khám phá ngành Công nghệ thông tin
                </a>
              </div>
              <div>
                <iframe
                  width="396"
                  height="210"
                  src="https://www.youtube.com/embed/L-PzpG0xVuE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <br></br>
                <a href="#">Teaser Cuộc thi Thiết kế áo lớp 2022</a>
              </div>
            </div>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
