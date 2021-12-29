/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import queryString from 'query-string';
import { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import Copyright from '../layouts/copyright';

const ActivateAccount = () => {
  const location = useLocation();
  const { token, id } = queryString.parse(location.search);
  const { verifyUser } = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token !== undefined || id !== undefined) {
      const activateAccount = async () => {
        try {
          const res = await verifyUser({ token, id });
          setSuccess(res.success);
          setMessage(res.message);
        } catch (error) {
          setSuccess(error.response.data.success);
          setMessage(error.response.data.message);
        }
      };
      activateAccount();
    }
  }, [token, id]);

  let body;
  if (token === undefined || id === undefined) {
    body = (
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Vui lòng kiểm tra email
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Đường link kích hoạt của bạn có hạn trong 10 phút.
        </Typography>
      </CardContent>
    );
  } else {
    body = (
      <>
        {success ? (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {message}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tạo tài khoản thành công <br />
              Vui lòng đăng nhập!
            </Typography>
            <CardActions>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Link className="text-white" to="/login">
                  Đến trang đăng nhập.
                </Link>
              </Button>
            </CardActions>
          </CardContent>
        ) : (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {message}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Đã xảy ra lỗi. <br />
              Vui lòng đăng ký lại!
            </Typography>
            <CardActions>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Link className="text-white" to="/register">
                  Đến trang đăng ký.
                </Link>
              </Button>
            </CardActions>
          </CardContent>
        )}
      </>
    );
  }

  return (
    <>
      <Typography component="h1" variant="h4">
        Kích Hoạt Tài Khoản
      </Typography>
      <Box component="form" sx={{ mt: 1 }}>
        <Card sx={{ minWidth: 275 }}>{body}</Card>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
};

export default ActivateAccount;
