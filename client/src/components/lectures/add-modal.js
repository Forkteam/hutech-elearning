/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  hideModal,
  setCurrentId,
  showModal,
  showToast,
} from '../../redux/actions';
import { createLecture, updateLecture } from '../../redux/actions/lectures';
import { currentId$, lectures$, modal$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../layouts/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const { id: subjectId } = useParams();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const toast = useSelector(toast$);
  const lectures = useSelector(lectures$);
  const currentId = useSelector(currentId$);
  const [newLecture, setNewLecture] = useState({
    title: '',
    description: '',
    url: '',
    file: '',
  });
  const { title, description, url } = newLecture;
  const currentLecture =
    currentId.id !== 0
      ? lectures.data.find((lecture) => lecture.id === currentId.id)
      : null;

  useEffect(() => {
    if (currentId.id !== 0) {
      setNewLecture({
        title: currentLecture.title,
        description: currentLecture.description,
        url: currentLecture.url,
        file: currentLecture.file,
      });
      dispatch(showModal());
    } else {
      setNewLecture({
        title: '',
        description: '',
        url: '',
        file: '',
      });
    }
  }, [currentId, dispatch]);

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
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!title) {
      setAlert({
        type: 'warning',
        message: 'Ti??u ????? kh??ng ???????c b??? tr???ng',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (
      url.split('?v=')[0] !== 'https://www.youtube.com/watch' &&
      url.split('/')[3] !== 'embed' &&
      url !== ''
    ) {
      setAlert({
        type: 'warning',
        message: 'URL Youtube kh??ng h???p l???',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    setAlert(null);
    if (currentId.id === 0) {
      dispatch(
        createLecture.createLectureRequest({
          ...newLecture,
          subjectId,
        })
      );
      dispatch(
        showToast({
          message: 'Vui l??ng ch???! D??? li???u ??ang ???????c c???p nh???t...',
          type: 'warning',
        })
      );
    } else {
      dispatch(
        updateLecture.updateLectureRequest({
          id: currentId.id,
          ...newLecture,
        })
      );
      dispatch(
        showToast({
          message: 'Vui l??ng ch???! D??? li???u ??ang ???????c c???p nh???t...',
          type: 'warning',
        })
      );
    }
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>{currentId.id === 0 ? 'TH??M' : 'CH???NH S???A'}</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={onSubmit}>
          {alert && <AlertMessage info={alert} />}
          {!alert && <AlertMessage info={toast} />}
          <TextField
            margin="dense"
            type="text"
            required
            fullWidth
            variant="standard"
            autoFocus
            label="Ti??u ?????"
            name="title"
            value={title}
            onChange={onChangeNewLectureForm}
          />
          <TextField
            margin="dense"
            multiline
            fullWidth
            variant="standard"
            label="M?? t???"
            name="description"
            value={description}
            onChange={onChangeNewLectureForm}
          />
          <TextField
            margin="dense"
            multiline
            fullWidth
            variant="standard"
            label="URL Youtube"
            helperText="Ph???i c?? d???ng nh?? sau: https://www.youtube.com/watch?v=sk0VynhUKVQ ho???c https://www.youtube.com/embed/sk0VynhUKVQ"
            name="url"
            value={url}
            onChange={onChangeNewLectureForm}
          />
          <TextField
            margin="dense"
            type="file"
            accept="application/pdf"
            multiple={false}
            fullWidth
            variant="standard"
            label="File PDF"
            helperText="Ch??? ch???p nh???n file PDF (d?????i 5mb)"
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
