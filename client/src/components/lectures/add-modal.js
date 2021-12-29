/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { createLecture } from '../../redux/actions/lectures';
import { currentId$, modal$ } from '../../redux/selectors';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const { id: subjectId } = useParams();
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
    if (currentId._id === 0) {
      dispatch(
        createLecture.createLectureRequest({
          ...newLecture,
          subjectId: subjectId,
        })
      );
      console.log(newLecture);
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
            label="URL"
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
