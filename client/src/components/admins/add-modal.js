/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import DatePicker from '@mui/lab/DatePicker';
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
import moment from 'moment';
import 'moment/locale/vi';
import {
  hideModal,
  setCurrentId,
  showModal,
  showToast,
} from '../../redux/actions';
import { createUser, updateUser } from '../../redux/actions/users';
import { admins$, currentId$, modal$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../overlays/transition';
moment.locale('vi');

const AddModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const toast = useSelector(toast$);
  const admins = useSelector(admins$);
  const currentId = useSelector(currentId$);
  const [newAdmin, setNewAdmin] = useState({
    fullName: '',
    username: '',
    email: '',
    code: '',
    birthday: '',
    avatar: '',
    password: '',
    confirmPassword: '',
  });
  const {
    fullName,
    username,
    email,
    code,
    birthday,
    password,
    confirmPassword,
  } = newAdmin;
  const currentAdmin =
    currentId.id !== 0
      ? admins.data.find((admin) => admin.id === currentId.id)
      : null;

  useEffect(() => {
    if (currentId.id !== 0) {
      setNewAdmin({
        fullName: currentAdmin.fullName,
        username: currentAdmin.username,
        email: currentAdmin.email,
        code: currentAdmin.code,
        birthday: currentAdmin.birthday,
        avatar: currentAdmin.avatar,
      });
      dispatch(showModal());
    } else {
      setNewAdmin({
        fullName: '',
        username: '',
        email: '',
        code: '',
        birthday: '',
        avatar: '',
        password: '',
        confirmPassword: '',
      });
    }
  }, [currentId, dispatch]);

  const onChangeNewAdminForm = (event) =>
    setNewAdmin({ ...newAdmin, [event.target.name]: event.target.value });

  const onChangeDate = (value) =>
    setNewAdmin({ ...newAdmin, birthday: moment(value).utc() });

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (event) => {
    const base64image = await toBase64(event.target.files[0]);
    setNewAdmin({ ...newAdmin, avatar: base64image });
  };

  const closeDialog = () => {
    setNewAdmin({
      fullName: '',
      username: '',
      email: '',
      code: '',
      birthday: '',
      avatar: '',
      password: '',
      confirmPassword: '',
    });
    dispatch(hideModal());
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!fullName) {
      setAlert({
        type: 'warning',
        message: 'Họ tên không được bỏ trống',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (username.includes(' ')) {
      setAlert({
        type: 'warning',
        message: 'Username không được có khoảng trắng',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setAlert({
        type: 'warning',
        message: 'Email không hợp lệ',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (currentId.id === 0) {
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
      setAlert(null);
      dispatch(createUser.createUserRequest({ role: 2, ...newAdmin }));
      dispatch(
        showToast({
          message: 'Please wait! We are updating...',
          type: 'warning',
        })
      );
    } else {
      setAlert(null);
      dispatch(
        updateUser.updateUserRequest({
          id: currentId.id,
          ...newAdmin,
        })
      );
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
      <DialogTitle>{currentId.id === 0 ? 'THÊM' : 'CHỈNH SỬA'}</DialogTitle>
      <DialogContent dividers>
        <div style={{ marginBottom: '20px' }}>
          {alert && <AlertMessage info={alert} />}
          {!alert && <AlertMessage info={toast} />}
        </div>
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
        {currentId.id === 0 ? (
          <>
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
          </>
        ) : (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mã nhân viên"
              name="code"
              onChange={onChangeNewAdminForm}
              value={code}
            />
            <DatePicker
              label="Ngày sinh"
              value={birthday}
              onChange={onChangeDate}
              renderInput={(params) => (
                <TextField {...params} margin="normal" required fullWidth />
              )}
            />
            <TextField
              margin="dense"
              type="file"
              accept="image/*"
              multiple={false}
              required
              fullWidth
              variant="standard"
              label="Ảnh đại diện"
              helperText="Hãy chọn một bức ảnh thật đẹp"
              name="avatar"
              onChange={handleFileChange}
            />
          </>
        )}
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
