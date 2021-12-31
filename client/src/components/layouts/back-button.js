import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <Button
      onClick={() => history.goBack()}
      variant="body2"
      sx={{ mt: 1, ml: 1, color: '#5048E5' }}
    >
      &lt; Trở về
    </Button>
  );
};

export default BackButton;
