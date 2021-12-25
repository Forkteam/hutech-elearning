import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { getIndustries } from '../../redux/actions/industries';
import { currentId$, industries$, modal$ } from '../../redux/selectors';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const industries = useSelector(industries$);
  const [newIndustry, setNewIndustry] = useState({
    code: '',
    description: '',
    image: '',
    status: 'PRIVATE',
    industryId: '',
  });
  const { code, description, status, industryId } = newIndustry;

  useEffect(() => {
    dispatch(getIndustries.getIndustriesRequest());
  }, [dispatch]);

  const onChangeNewSubjectForm = (event) => {
    setNewIndustry({ ...newIndustry, [event.target.name]: event.target.value });
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
    setNewIndustry({ ...newIndustry, image: base64image });
  };

  const closeDialog = () => {
    setNewIndustry({
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
      console.log('create subject>>>', newIndustry);
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
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>CREATE NEW SUBJECT</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            margin="dense"
            type="text"
            required
            fullWidth
            variant="standard"
            autoFocus
            label="Code"
            name="code"
            value={code}
            onChange={onChangeNewSubjectForm}
          />
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="Description"
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
            label="Status"
            name="status"
            value={status}
            onChange={onChangeNewSubjectForm}
          >
            <MenuItem value={'PRIVATE'}>Private</MenuItem>
            <MenuItem value={'PUBLIC'}>Public</MenuItem>
          </TextField>
          <TextField
            margin="dense"
            required
            fullWidth
            variant="standard"
            select
            label="Industry"
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
