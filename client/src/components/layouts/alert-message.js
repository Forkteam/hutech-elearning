import { Alert } from '@mui/material';

const AlertMessage = ({ info }) => {
  return info === null || info?.type === 'success' ? null : (
    <Alert severity={info.type}>{info.message}</Alert>
  );
};

export default AlertMessage;
