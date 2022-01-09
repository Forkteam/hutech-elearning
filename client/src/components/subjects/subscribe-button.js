import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  subscribeSubject,
  unsubscribeSubject,
} from '../../redux/actions/subjects';
import { subjects$ } from '../../redux/selectors';
import Transition from '../layouts/transition';

const SubscribeButton = ({ subjectId }) => {
  const subjects = useSelector(subjects$);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    if (subjects.singleSubject?.isSubscribe)
      dispatch(unsubscribeSubject.unsubscribeSubjectRequest(subjectId));
    else dispatch(subscribeSubject.subscribeSubjectRequest(subjectId));
    setOpen(false);
  };

  return (
    <>
      <Button
        color="error"
        variant="outlined"
        sx={{ mt: 1, mr: 3, mb: 1 }}
        onClick={handleClickOpen}
      >
        {subjects.singleSubject?.isSubscribe ? 'Bỏ yêu thích' : 'Yêu thích'}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {subjects.singleSubject?.isSubscribe ? 'Bỏ yêu thích' : 'Yêu thích'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn sẽ không nhận được thông báo qua email mỗi khi bài học này có
            bài giảng mới
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Trở lại</Button>
          <Button onClick={handleAgree}>Đồng ý</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SubscribeButton;
