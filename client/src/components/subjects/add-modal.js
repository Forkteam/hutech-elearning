import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { getIndustries } from '../../redux/actions/industries';
import { createSubject } from '../../redux/actions/subjects';
import { currentId$, industries$, modal$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const toast = useSelector(toast$);
  const industries = useSelector(industries$);
  const [newSubject, setNewSubject] = useState({
    name: '',
    description: '',
    image: '',
    status: 'PRIVATE',
    industryId: '',
  });
  const { name, description, status, industryId } = newSubject;

  useEffect(() => {
    dispatch(getIndustries.getIndustriesRequest());
  }, [dispatch]);

  const onChangeNewSubjectForm = (event) => {
    setNewSubject({ ...newSubject, [event.target.name]: event.target.value });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (event) => {
    const base64image = await toBase64(event.target.files[0]);
    setNewSubject({ ...newSubject, image: base64image });
  };

  const closeDialog = () => {
    setNewSubject({
      name: '',
      description: '',
      image: '',
      status: 'PRIVATE',
      industryId: '',
    });
    dispatch(hideModal());
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (currentId.id === 0) {
      dispatch(createSubject.createSubjectRequest(newSubject));
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update subject');
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    }
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>CREATE NEW SUBJECT</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={onSubmit}>
          <AlertMessage info={toast} />
          <TextField
            margin="dense"
            type="text"
            required
            fullWidth
            variant="standard"
            autoFocus
            label="Tên môn học"
            name="name"
            value={name}
            onChange={onChangeNewSubjectForm}
          />
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="Mô tả "
            name="description"
            value={description}
            onChange={onChangeNewSubjectForm}
          />
          <TextField
            margin="dense"
            required
            fullWidth
            variant="standard"
            select
            label="Quyền truy cập"
            name="status"
            value={status}
            onChange={onChangeNewSubjectForm}
          >
            <MenuItem value={'PRIVATE'}>Riêng tư</MenuItem>
            <MenuItem value={'PUBLIC'}>Công khai</MenuItem>
          </TextField>
          <TextField
            margin="dense"
            required
            fullWidth
            variant="standard"
            select
            label="Ngành"
            name="industryId"
            value={industryId}
            onChange={onChangeNewSubjectForm}
            sx={{ marginBottom: '20px' }}
          >
            {industries.data.map((industry) => (
              <MenuItem key={industry.id} value={industry.id}>
                {industry.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            type="file"
            accept="image/*"
            multiple={false}
            required
            fullWidth
            variant="standard"
            label="Image"
            name="image"
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
