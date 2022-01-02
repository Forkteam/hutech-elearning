/* eslint-disable react-hooks/exhaustive-deps */
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { Fragment, useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentId, showToast } from '../../redux/actions';
import { createComment, getComments } from '../../redux/actions/comments';
import { comments$, currentId$ } from '../../redux/selectors';
import { AuthContext } from '../../contexts/auth-context';
moment.locale('vi');

const Comments = ({ role, lectureId, handleEditClick, handleDeleteClick }) => {
  const dispatch = useDispatch();
  const currentId = useSelector(currentId$);
  const comments = useSelector(comments$);
  const [newComment, setNewComment] = useState({
    content: '',
    lectureId: '',
  });
  const { content } = newComment;
  const {
    authState: { user },
  } = useContext(AuthContext);

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
            {role > 1 && (
              <>
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={() => handleEditClick(item.id)}
                  color="inherit"
                />
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={() => handleDeleteClick(item.id)}
                  color="inherit"
                />
              </>
            )}
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
      {(!user?.isExternal || user?.role > 1) && (
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
          <Button
            type="submit"
            variant="outlined"
            sx={{ mb: 2, float: 'right' }}
          >
            Gửi bình luận
          </Button>
        </Box>
      )}
      <Divider variant="inset" />
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {commentsComponent}
      </List>
    </>
  );
};

export default Comments;
