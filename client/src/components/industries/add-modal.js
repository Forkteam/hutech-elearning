import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { createIndustry } from '../../redux/actions/industries';
import { currentId$, modal$ } from '../../redux/selectors';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const [newIndustry, setNewIndustry] = useState({
    code: '',
    name: '',
  });
  const { code, name } = newIndustry;

  const onChangeNewIndustryForm = (event) =>
    setNewIndustry({ ...newIndustry, [event.target.name]: event.target.value });

  const closeDialog = () => {
    setNewIndustry({
      code: '',
      name: '',
    });
    dispatch(hideModal());
    if (currentId._id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (currentId._id === 0) {
      dispatch(createIndustry.createIndustryRequest(newIndustry));
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update industry>>>', newIndustry);
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
      <DialogTitle>{currentId._id === 0 ? 'THÊM' : 'CHỈNH SỬA'}</DialogTitle>
      <DialogContent dividers>
        <TextField
          margin="dense"
          label="Mã ngành"
          type="text"
          name="code"
          required
          fullWidth
          variant="standard"
          value={code}
          onChange={onChangeNewIndustryForm}
        />
        <TextField
          margin="dense"
          label="Tên ngành"
          type="text"
          name="name"
          required
          fullWidth
          variant="standard"
          value={name}
          onChange={onChangeNewIndustryForm}
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

export default AddModal;
