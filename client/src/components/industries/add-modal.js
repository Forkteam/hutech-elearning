/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { createIndustry, updateIndustry } from '../../redux/actions/industries';
import { currentId$, industries$, modal$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const industries = useSelector(industries$);
  const toast = useSelector(toast$);
  const [newIndustry, setNewIndustry] = useState({
    code: '',
    name: '',
  });
  const { code, name } = newIndustry;
  const currentIndustry =
    currentId.id !== 0
      ? industries.data.find((lecture) => lecture.id === currentId.id)
      : null;

  useEffect(() => {
    if (currentId.id !== 0) {
      setNewIndustry({
        code: currentIndustry?.code,
        name: currentIndustry?.name,
      });
      dispatch(showModal());
    } else {
      setNewIndustry({
        code: '',
        name: '',
      });
    }
  }, [currentId, dispatch]);

  const onChangeNewIndustryForm = (event) =>
    setNewIndustry({ ...newIndustry, [event.target.name]: event.target.value });

  const closeDialog = () => {
    setNewIndustry({
      code: '',
      name: '',
    });
    dispatch(hideModal());
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!code || !name) {
      setAlert({
        type: 'warning',
        message: 'Mã lĩnh vực hoặc tên lĩnh vực bị bỏ trống.',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    setAlert(null);
    if (currentId.id === 0) {
      dispatch(createIndustry.createIndustryRequest(newIndustry));
      dispatch(
        showToast({
          message: 'Vui lòng chờ! Dữ liệu đang được cập nhật...',
          type: 'warning',
        })
      );
    } else {
      dispatch(
        updateIndustry.updateIndustryRequest({
          id: currentId.id,
          ...newIndustry,
        })
      );
      dispatch(
        showToast({
          message: 'Vui lòng chờ! Dữ liệu đang được cập nhật...',
          type: 'warning',
        })
      );
    }
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>{currentId.id === 0 ? 'THÊM' : 'CHỈNH SỬA'}</DialogTitle>
      <DialogContent dividers>
        {alert && <AlertMessage info={alert} />}
        {!alert && <AlertMessage info={toast} />}
        <TextField
          margin="dense"
          label="Mã lĩnh vực"
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
          label="Tên lĩnh vực"
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
