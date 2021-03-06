/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  hideModal,
  setCurrentId,
  showModal,
  showToast,
} from '../../redux/actions';
import { getIndustries } from '../../redux/actions/industries';
import { createSubject, updateSubject } from '../../redux/actions/subjects';
import {
  currentId$,
  industries$,
  modal$,
  subjects$,
  toast$,
} from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../layouts/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const toast = useSelector(toast$);
  const subjects = useSelector(subjects$);
  const industries = useSelector(industries$);
  const [newSubject, setNewSubject] = useState({
    name: '',
    description: '',
    image: '',
    status: 'PRIVATE',
    industryId: '',
  });
  const { name, description, image, status, industryId } = newSubject;
  const currentAdmin =
    currentId.id !== 0
      ? subjects.data.find((admin) => admin.id === currentId.id)
      : null;

  useEffect(() => {
    if (currentId.id !== 0) {
      console.log(currentAdmin, currentId);
      setNewSubject({
        name: currentAdmin.name,
        description: currentAdmin.description,
        image: currentAdmin.image,
        status: currentAdmin.status,
        industryId: currentAdmin.industryId.id,
      });
      dispatch(showModal());
    } else {
      setNewSubject({
        name: '',
        description: '',
        image: '',
        status: 'PRIVATE',
        industryId: '',
      });
    }
  }, [currentId, dispatch]);

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
    if (!name || !description || !image) {
      setAlert({
        type: 'warning',
        message: 'Vui l??ng ??i???n ?????y ????? th??ng tin',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    setAlert(null);
    if (currentId.id === 0) {
      dispatch(createSubject.createSubjectRequest(newSubject));
      dispatch(
        showToast({
          message: 'Vui l??ng ch???! D??? li???u ??ang ???????c c???p nh???t...',
          type: 'warning',
        })
      );
    } else {
      dispatch(
        updateSubject.updateSubjectRequest({
          id: currentId.id,
          ...newSubject,
        })
      );
      dispatch(
        showToast({
          message: 'Vui l??ng ch???! D??? li???u ??ang ???????c c???p nh???t...',
          type: 'warning',
        })
      );
    }
    dispatch(hideModal());
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>{currentId.id === 0 ? 'TH??M' : 'CH???NH S???A'}</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={onSubmit}>
          <div style={{ marginBottom: '20px' }}>
            {alert && <AlertMessage info={alert} />}
            {!alert && <AlertMessage info={toast} />}
          </div>
          <TextField
            margin="dense"
            type="text"
            required
            fullWidth
            variant="standard"
            autoFocus
            label="T??n t??i li???u"
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
            label="M?? t??? "
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
            label="Quy???n truy c???p"
            name="status"
            value={status}
            onChange={onChangeNewSubjectForm}
          >
            <MenuItem value={'PRIVATE'}>Ri??ng t??</MenuItem>
            <MenuItem value={'PUBLIC'}>C??ng khai</MenuItem>
          </TextField>
          <TextField
            margin="dense"
            required
            fullWidth
            variant="standard"
            select
            label="L??nh v???c"
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
            fullWidth
            variant="standard"
            label="???nh"
            helperText="H??y ch???n m???t b???c ???nh th???t ?????p"
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
