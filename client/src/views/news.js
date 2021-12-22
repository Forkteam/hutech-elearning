import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Avatar from '@mui/material/Avatar';
import SquareIcon from '@mui/icons-material/Square';
import StarsIcon from '@mui/icons-material/Stars';
const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));

export default function News() {
    return (
      <div >
        <Typography 
        sx={{
            margin: 2,
            fontSize: 50,
            fontFamily: 'Arial'
        }} >
        Tin Tức
        </Typography>
        
        <div className='News'>
          <Box className = 'Box1'
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
          <Box className = 'title'>
            <Avatar sx={{  bgcolor: 'Red', marginRight: 2 }}>
            <NewspaperIcon />
            </Avatar>
            <Typography 
            sx={{
                fontSize: 19,
                fontFamily: 'Arial'
            }} >Tin HUTECH</Typography>
          </Box>
          <a href='#'><img class="img-responsive" alt="HUTECH và Công ty Cổ phần Quốc tế SEM ký kết hợp tác" src="https://file1.hutech.edu.vn/file/news/b5124141aecf18837e90e7470ce70e35.jpg"></img>
          <Typography 
          sx={{
              color:'blue',
              marginLeft: 2,
              marginBottom: 1,
              fontSize: 19
                
          }}variant='h6' >HUTECH và Công ty Cổ phần Quốc tế SEM ký kết hợp tác</Typography>
          </a>
          
          <Grid 
          sx = {{
              marginLeft: 2,
              fontSize: 15
            }}>Sáng nay (21/12), Khoa Tiếng Anh, Trường Đại học Công nghệ TP.HCM (HUTECH) đã ký kết thỏa thuận hợp tác với Công ty Cổ phần Quốc tế SEM, mở ra nhiều cơ hội học tập và việc làm cho sinh viên ngành Ngôn ngữ Anh HUTECH trong thời gian tới.</Grid>
            
          <Grid 
          sx = {{
              marginLeft: 2,
              
          }}>
            <hr></hr>
            <a href='#'><Typography ><SquareIcon sx={{fontSize: 10, marginRight: 2}}/>Sinh viên HUTECH đánh giá rèn luyện cá nhân và cập nhật thông tin ngoại trú từ 03/01/2022</Typography></a>
            <hr></hr>
            <a href='#'><Typography ><SquareIcon sx={{fontSize: 10, marginRight: 2}}/> HUTECH Startup Wings - bước đệm vững chắc để sinh viên đến với các sân chơi khởi nghiệp toàn quốc</Typography></a>
            <hr></hr>

          </Grid>
          </Box>
          <Box className = 'Box1'
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
                paddingright: 20 
              }} 
          >
              <Box className = 'title'><Avatar sx={{  bgcolor: 'Red', marginRight: 2 }}>
              <StarsIcon />
              </Avatar>
              <Typography 
              sx={{
                  fontSize: 19,
                  fontFamily: 'Arial'
                 }} >Tin nổi bật</Typography>
              </Box>
              <Grid 
                sx = {{
                marginLeft: 2,
                }}>
                <hr></hr>
                <a href='#'><Typography ><SquareIcon sx={{fontSize: 10, marginRight: 2}}/>Sinh viên HUTECH đánh giá rèn luyện cá nhân và cập nhật thông tin ngoại trú từ 03/01/2022</Typography></a>
                <hr></hr>
                <a href='#'><Typography ><SquareIcon sx={{fontSize: 10, marginRight: 2}}/> HUTECH Startup Wings - bước đệm vững chắc để sinh viên đến với các sân chơi khởi nghiệp toàn quốc</Typography></a>
                <hr></hr>
              </Grid>
          </Box>
        </div>
      </div>
    );
}