/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentId, showToast } from '../../redux/actions';
import { createComment, getComments } from '../../redux/actions/comments';
import { currentId$, comments$ } from '../../redux/selectors';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');

const Comments = () => {
  const dispatch = useDispatch();
  const { id: lectureId } = useParams();
  const currentId = useSelector(currentId$);
  const comments = useSelector(comments$);
  const [newComment, setNewComment] = useState({
    content: '',
    lectureId: '',
  });
  const { content } = newComment;

  useEffect(() => {
    dispatch(getComments.getCommentsRequest(lectureId));
  }, [dispatch]);

  const onChangeNewCommentForm = (event) => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (currentId.id === 0) {
      dispatch(
        createComment.createCommentRequest({
          ...newComment,
          lectureId,
        })
      );
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update comment');
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    }
    setNewComment({
      content: '',
      lectureId: '',
    });
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  let commentsComponent;
  if (comments.loading) {
    commentsComponent = (
      <div
        style={{
          marginTop: '50px',
          textAlign: 'center',
        }}
      >
        <CircularProgress />
      </div>
    );
  } else {
    if (comments.data.length !== 0)
      commentsComponent = comments.data.map((item) => (
        <Fragment key={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={item.user?.fullName ?? 'img'}
                src={item.user?.avatar ?? ''}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.user?.fullName ?? 'user'}
              secondary={
                <Fragment>
                  {`${moment(item.createdAt ?? '2001-01-21').format('lll')} - `}
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.content}
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ));
    else
      commentsComponent = (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body1" color="text.primary">
            Chưa có bình luận
          </Typography>
        </div>
      );
  }

  return (
    <>
      <Typography variant="h6" component="h6" sx={{ mt: 4, mb: 1, ml: 4 }}>
        Bình luận
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ width: '98%', m: 'auto' }}
      >
        <TextField
          margin="dense"
          multiline
          rows={4}
          required
          fullWidth
          label="Đừng ngại để lại bình luận"
          name="content"
          value={content}
          onChange={onChangeNewCommentForm}
        />
        <Button type="submit" variant="outlined" sx={{ mb: 2, float: 'right' }}>
          Gửi bình luận
        </Button>
      </Box>
      <Divider variant="inset" />
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {commentsComponent}
      </List>
    </>
  );
};

export default Comments;
