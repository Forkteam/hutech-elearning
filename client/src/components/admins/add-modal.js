/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import DatePicker from '@mui/lab/DatePicker';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../contexts/auth-context';
import {
  hideModal,
  setCurrentId,
  showModal,
  showToast,
} from '../../redux/actions';
import { createUser, updateUser } from '../../redux/actions/users';
import { admins$, currentId$, modal$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../layouts/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const toast = useSelector(toast$);
  const admins = useSelector(admins$);
  const currentId = useSelector(currentId$);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [newAdmin, setNewAdmin] = useState({
    fullName: '',
    username: '',
    email: '',
    code: '',
    birthday: '',
    avatar: '',
    password: '',
    confirmPassword: '',
    role: 1,
  });
  const {
    fullName,
    username,
    email,
    code,
    birthday,
    password,
    confirmPassword,
    role,
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
        role: currentAdmin.role,
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
        role: 1,
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
      role: 1,
    });
    dispatch(hideModal());
    if (currentId.id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!fullName) {
      setAlert({
        type: 'warning',
        message: 'H??? t??n kh??ng ???????c b??? tr???ng',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (username.includes(' ')) {
      setAlert({
        type: 'warning',
        message: 'Username kh??ng ???????c c?? kho???ng tr???ng',
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
        message: 'Email kh??ng h???p l???',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    if (currentId.id === 0) {
      if (password.length < 6) {
        setAlert({
          type: 'warning',
          message: 'M???t kh???u kh??ng ???????c ??t h??n 6 k?? t???',
        });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      if (password !== confirmPassword) {
        setAlert({ type: 'warning', message: 'M???t kh???u kh??ng tr??ng kh???p' });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      setAlert(null);
      dispatch(createUser.createUserRequest({ role: 2, ...newAdmin }));
      dispatch(
        showToast({
          message: 'Vui l??ng ch???! D??? li???u ??ang ???????c c???p nh???t...',
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
        <div style={{ marginBottom: '20px' }}>
          {alert && <AlertMessage info={alert} />}
          {!alert && <AlertMessage info={toast} />}
        </div>
        <TextField
          required
          fullWidth
          label="H??? t??n"
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
          label="T??n ????ng nh???p"
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
              label="M???t kh???u"
              type="password"
              onChange={onChangeNewAdminForm}
              value={password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Nh???p l???i m???t kh???u"
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
              label="M?? nh??n vi??n"
              name="code"
              onChange={onChangeNewAdminForm}
              value={code}
            />
            <DatePicker
              label="Ng??y sinh"
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
              label="???nh ?????i di???n"
              helperText="H??y ch???n m???t b???c ???nh th???t ?????p"
              name="avatar"
              onChange={handleFileChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              select
              label="Quy???n"
              name="role"
              onChange={onChangeNewAdminForm}
              value={role}
            >
              <MenuItem value={1}>Sinh vi??n</MenuItem>
              <MenuItem value={2}>Admin</MenuItem>
              {user?.role > 2 && <MenuItem value={3}>Super admin</MenuItem>}
            </TextField>
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
