// import { useHistory } from 'react-router-dom';
//import { Card, Button } from 'react-bootstrap';
import { Button, Typography } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import { Link } from "react-router-dom";

const Error = () => {
  // let history = useHistory();
     return (
    <Box sx={{ 
      width:'100vw',
      height:'100vh',
      background:'url(https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-Galaxy-lung-linh-huy%E1%BB%81n-%E1%BA%A3o.jpg) no-repeat center / cover',
      display:'flex',
      fontSize:'100%',
      }}>
      <Box height='60%' width='50%' 
        sx={{
          background:'rgba(126, 84, 201, 0.45)',
          m:'auto',
          position:'relative',
          borderRadius:20,
        }}>
       <Typography align='center'>
         <Typography marginTop="6vh" fontSize="4vw" fontWeight='600' color='rgba(255, 0, 0, 0.8)'>
            404 : Error Page
         </Typography>
         <Typography fontSize="2.17vw" fontWeight='500' color='rgba(247, 242, 242, 0.7)'>
           Không tìm thấy trang bạn muốn truy cập.
         </Typography>
         <Typography height="1vh" fontSize="1.8vw" fontWeight='500' color='rgba(247, 242, 242, 0.7)'>
           <br/>Vui lòng thử lại hoặc liên hệ <Button sx={{ letterSpacing:4 ,display:'flex', fontSize:'1.5vw', fontWeight:'700' ,color:'rgba(220, 157, 30, 0.85)' }} href="https://youtu.be/PaBkXQhxwto">Support@TeamDoAn</Button>
         </Typography>
       </Typography>

       <Box>
       <Link to="/">
            <Button sx={{ 
              background:'rgba(6, 79, 224, 0.67)',
              borderRadius:'20px', 
              height:"11%",
              width:"30%", 
              position:'absolute', 
              top:"78%",
              bottom: "15%", 
              left:'35%', 
              right:'35%',
              fontSize:'1.3vw',
              }} variant="contained">
              Quay lại trang chủ
              </Button>
          </Link>
       </Box>

      </Box>
    </Box>
    );
};

export default Error;
