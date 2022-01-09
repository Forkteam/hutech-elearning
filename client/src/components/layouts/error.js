import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Image from '../../assets/banner.jpg';

const Error = () => {
  return (
    <Paper
      sx={{
        position: 'absolute',
        width: '-webkit-fill-available',
        height: '100vh',
        borderRadius: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          textAlign: 'center',
          margin: 'auto',
          boxShadow: '0px 5px 14px rgb(100 116 139)',
          top: '50%',
          transform: 'translateY(50%)',
          borderRadius: 4,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="red">
              404 Page Not Found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Không tìm thấy trang bạn muốn truy cập
              <br />
              Vui lòng kiểm tra lại hoặc liên hệ
            </Typography>
            <Button
              href="https://fb.com/CrisAn.2001"
              target="_blank"
              color="error"
              variant="outlined"
              sx={{ m: 1 }}
            >
              Support@Nhóm 2 - 19DTHD4
            </Button>
            <br />
            <Button variant="outlined">
              <Link to="/">Quay lại trang chủ</Link>
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export default Error;
