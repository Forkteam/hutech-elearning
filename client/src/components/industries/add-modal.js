import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { createIndustry } from '../../redux/actions/industries';
import { currentId$, modal$ } from '../../redux/selectors';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

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
      await dispatch(createIndustry.createIndustryRequest(newIndustry));
      await dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update industry>>>', newIndustry);
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
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      TransitionComponent={Transition}
      open={modal.show}
      scroll="body"
    >
      <DialogTitle>
        {currentId._id === 0 ? 'CREATE NEW SUBJECT' : 'EDIT SUBJECT'}
      </DialogTitle>
      <DialogContent dividers>
        <TextField
          margin="dense"
          label="Code"
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
          label="Name"
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
