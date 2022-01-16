/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideModal,
  setCurrentId,
  showModal,
  showToast,
} from '../../redux/actions';
import { updateComment } from '../../redux/actions/comments';
import { comments$, currentId$, modal$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../layouts/transition';

const CommentModal = ({ lectureId }) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const toast = useSelector(toast$);
  const comments = useSelector(comments$);
  const currentId = useSelector(currentId$);
  const [newComment, setNewComment] = useState({
    content: '',
    lectureId: lectureId,
  });
  const { content } = newComment;
  const currentComment =
    currentId.id !== 0
      ? comments.data.find((comment) => comment.id === currentId.id)
      : null;

  useEffect(() => {
    if (currentId.id !== 0) {
      setNewComment({
        content: currentComment.content,
        lectureId: currentComment.lectureId,
      });
      dispatch(showModal());
    } else {
      setNewComment({
        content: '',
        lectureId: lectureId,
      });
    }
  }, [currentId, dispatch]);

  const onChangeNewCommentForm = (event) =>
    setNewComment({ ...newComment, [event.target.name]: event.target.value });

  const closeDialog = () => {
    setNewComment({
      content: '',
      lectureId: lectureId,
    });
    dispatch(hideModal());
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!content) {
      setAlert({
        type: 'warning',
        message: 'Nội dung không được bỏ trống',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    setAlert(null);
    dispatch(
      updateComment.updateCommentRequest({
        id: currentId.id,
        ...newComment,
      })
    );
    dispatch(
      showToast({
        message: 'Vui lòng chờ! Dữ liệu đang được cập nhật...',
        type: 'warning',
      })
    );
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>CHỈNH SỬA</DialogTitle>
      <DialogContent dividers>
        <div style={{ marginBottom: '20px' }}>
          {alert && <AlertMessage info={alert} />}
          {!alert && <AlertMessage info={toast} />}
        </div>
        <TextField
          required
          fullWidth
          label="Nội dung"
          name="content"
          autoFocus
          onChange={onChangeNewCommentForm}
          value={content}
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

export default CommentModal;
