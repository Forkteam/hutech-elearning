import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://fb.com/huynhjs" target="_blank">
        TeamDoAn 19DTHD4
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
