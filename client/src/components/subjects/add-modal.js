import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import queryString from 'query-string';
import { forwardRef, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { currentId$, modal$ } from '../../redux/selectors';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddModal = () => {
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const location = useLocation();
  const { userId: id } = queryString.parse(location.search);
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const [newLecture, setNewLecture] = useState({
    code: '',
    description: '',
    image: '',
    status: 'PRIVATE',
    industryId: '',
  });
  const { code, description, image, status, industryId } = newLecture;

  const onChangeNewLectureForm = (event) =>
    setNewLecture({ ...newLecture, [event.target.name]: event.target.value });

  const closeDialog = () => {
    setNewLecture({
      code: '',
      description: '',
      image: '',
      status: 'PRIVATE',
      industryId: '',
    });
    dispatch(hideModal());
    if (currentId._id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (currentId._id === 0) {
      console.log('create subject');
      await dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update subject');
      await dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    }
    closeDialog();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      TransitionComponent={Transition}
      open={modal.show}
      scroll="body"
    >
      <DialogTitle>CREATE NEW SUBJECT</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button autoFocus onClick={onSubmit}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModal;
