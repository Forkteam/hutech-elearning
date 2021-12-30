import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentId, showToast } from '../../redux/actions';
import { createUser } from '../../redux/actions/users';
import { currentId$, modal$ } from '../../redux/selectors';
import Transition from '../overlays/transition';
import AlertMessage from '../layouts/alert-message';

const AddModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const [newAdmin, setNewAdmin] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 2,
  });
  const { fullName, username, email, password, confirmPassword } = newAdmin;

  const onChangeNewAdminForm = (event) =>
    setNewAdmin({ ...newAdmin, [event.target.name]: event.target.value });

  const closeDialog = () => {
    setNewAdmin({
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    dispatch(hideModal());
    if (currentId._id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (currentId._id === 0) {
      if (username.includes(' ')) {
        setAlert({
          type: 'warning',
          message: 'Username không được có khoảng trắng',
        });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      if (password.length < 6) {
        setAlert({
          type: 'warning',
          message: 'Mật khẩu không được ít hơn 6 ký tự',
        });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      if (password !== confirmPassword) {
        setAlert({ type: 'warning', message: 'Mật khẩu không trùng khớp' });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      dispatch(createUser.createUserRequest(newAdmin));
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      console.log('update admin>>>', newAdmin);
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
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="paper">
      <DialogTitle>{currentId._id === 0 ? 'THÊM' : 'CHỈNH SỬA'}</DialogTitle>
      <DialogContent dividers>
        <TextField
          required
          fullWidth
          label="Họ tên"
          name="fullName"
          autoFocus
          onChange={onChangeNewAdminForm}
          value={fullName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          onChange={onChangeNewAdminForm}
          value={email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Tên đăng nhập"
          name="username"
          onChange={onChangeNewAdminForm}
          value={username}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mật khẩu"
          type="password"
          onChange={onChangeNewAdminForm}
          value={password}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Nhập lại mật khẩu"
          type="password"
          onChange={onChangeNewAdminForm}
          value={confirmPassword}
        />
        <AlertMessage info={alert} />
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
