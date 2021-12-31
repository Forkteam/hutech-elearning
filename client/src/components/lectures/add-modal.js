/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { createLecture } from '../../redux/actions/lectures';
import { currentId$, modal$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const { id: subjectId } = useParams();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const [newLecture, setNewLecture] = useState({
    title: '',
    description: '',
    url: '',
    file: '',
  });
  const { title, description, url } = newLecture;

  const onChangeNewLectureForm = (event) => {
    setNewLecture({ ...newLecture, [event.target.name]: event.target.value });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (event) => {
    const base64file = await toBase64(event.target.files[0]);
    setNewLecture({ ...newLecture, file: base64file });
  };

  const closeDialog = () => {
    setNewLecture({
      title: '',
      description: '',
      url: '',
      file: '',
    });
    dispatch(hideModal());
    if (currentId._id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (url.split('?v=')[0] !== 'https://www.youtube.com/watch') {
      setAlert({
        type: 'warning',
        message: 'URL Youtube không hợp lệ',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (currentId._id === 0) {
      dispatch(
        createLecture.createLectureRequest({
          ...newLecture,
          subjectId,
        })
      );
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update lecture');
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    }
    closeDialog();
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>CREATE NEW LECTURE</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            margin="dense"
            type="text"
            required
            fullWidth
            variant="standard"
            autoFocus
            label="Title"
            name="title"
            value={title}
            onChange={onChangeNewLectureForm}
          />
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="Mô tả"
            name="description"
            value={description}
            onChange={onChangeNewLectureForm}
          />
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="URL Youtube"
            helperText="Phải có dạng như sau: https://www.youtube.com/watch?v=7KAT_94JHVU"
            name="url"
            value={url}
            onChange={onChangeNewLectureForm}
          />
          <TextField
            margin="dense"
            type="file"
            accept="application/pdf"
            multiple={false}
            required
            fullWidth
            variant="standard"
            label="File PDF"
            name="file"
            onChange={handleFileChange}
          />
          <AlertMessage info={alert} />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 1 }}
          >
            Ok
          </Button>
          <Button fullWidth onClick={closeDialog}>
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
