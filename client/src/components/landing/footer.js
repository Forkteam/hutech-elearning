import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Typography component="footer" sx={{ display: 'flex', bgcolor: '#014c75' }}>
      <Container sx={{ my: 1, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              marked="left"
              gutterBottom
              sx={{ color: '#daf1ff' }}
            >
              Danh mục
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.2 }}>
                <Link to="/" className="footer" style={{ color: '#bde6ff' }}>
                  Trang chủ
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.2 }}>
                <Link
                  to="/about"
                  className="footer"
                  style={{ color: '#bde6ff' }}
                >
                  Giới thiệu
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.2 }}>
                <Link
                  to="/contact"
                  className="footer"
                  style={{ color: '#bde6ff' }}
                >
                  Liên hệ
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              marked="left"
              gutterBottom
              sx={{ color: '#daf1ff' }}
            >
              Kết nối với chúng tôi
            </Typography>
            <Box
              component="ul"
              sx={{ m: 0, listStyle: 'none', p: 0, display: 'grid' }}
            >
              <Box
                component="li"
                sx={{ py: 0.2, display: 'inline-flex', alignItems: 'center' }}
              >
                <FacebookIcon sx={{ color: ' #1976d2c9', zoom: '1.5' }} />
                <Link
                  to={{ pathname: 'https://www.facebook.com/hutechuniversity' }}
                  className="footer"
                  target="_blank"
                  style={{ color: '#bde6ff', marginLeft: 5 }}
                >
                  Facebook
                </Link>
              </Box>
              <Box
                component="li"
                sx={{ py: 0.2, display: 'inline-flex', alignItems: 'center' }}
              >
                <YouTubeIcon sx={{ color: ' #e21313c9', zoom: '1.5' }} />
                <Link
                  to={{ pathname: 'https://www.youtube.com/c/HUTECHChannel' }}
                  className="footer"
                  target="_blank"
                  style={{ color: '#bde6ff', marginLeft: 5 }}
                >
                  Youtube
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Typography
              variant="h6"
              marked="left"
              gutterBottom
              sx={{ color: '#daf1ff' }}
            >
              Thông tin
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.2 }}>
                <Typography style={{ color: '#bde6ff' }}>
                  Địa chỉ: Khu Công nghệ cao TP.HCM (SHTP), P.Long Thạnh Mỹ,
                  TP.Thủ Đức, TP.HCM
                </Typography>
              </Box>
              <Box component="li" sx={{ py: 0.2 }}>
                <Typography style={{ color: '#bde6ff' }}>
                  ĐT: (028) 5445 7777 - Fax: (028) 5445 4444
                </Typography>
              </Box>
              <Box component="li" sx={{ py: 0.2 }}>
                <Typography style={{ color: '#bde6ff' }}>
                  Email: hutech@hutech.edu.vn
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
