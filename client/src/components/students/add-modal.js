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
import { currentId$, modal$, students$, toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const modal = useSelector(modal$);
  const toast = useSelector(toast$);
  const students = useSelector(students$);
  const currentId = useSelector(currentId$);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [newStudent, setNewStudent] = useState({
    fullName: '',
    username: '',
    email: '',
    code: '',
    birthday: '',
    avatar: '',
    password: '',
    confirmPassword: '',
    isExternal: false,
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
    avatar,
    isExternal,
    role,
  } = newStudent;

  const onChangeNewStudentForm = (event) =>
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });

  const onChangeDate = (value) =>
    setNewStudent({ ...newStudent, birthday: moment(value).utc() });

  const currentStudent =
    currentId.id !== 0
      ? students.data.find((student) => student.id === currentId.id)
      : null;

  useEffect(() => {
    if (currentId.id !== 0) {
      setNewStudent({
        fullName: currentStudent.fullName,
        username: currentStudent.username,
        email: currentStudent.email,
        code: currentStudent.code,
        birthday: currentStudent.birthday,
        avatar: currentStudent.avatar,
        isExternal: currentStudent.isExternal,
        role: 1,
      });
      dispatch(showModal());
    } else {
      setNewStudent({
        fullName: '',
        username: '',
        email: '',
        code: '',
        birthday: '',
        avatar: '',
        password: '',
        confirmPassword: '',
        isExternal: false,
        role: 1,
      });
    }
  }, [currentId, dispatch]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (event) => {
    const base64image = await toBase64(event.target.files[0]);
    setNewStudent({ ...newStudent, avatar: base64image });
  };

  const closeDialog = () => {
    setNewStudent({
      fullName: '',
      username: '',
      email: '',
      code: '',
      birthday: '',
      avatar: '',
      password: '',
      confirmPassword: '',
      isExternal: false,
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
      dispatch(
        createUser.createUserRequest({
          role: 1,
          username,
          email,
          password,
          fullName,
        })
      );
      dispatch(
        showToast({
          message: 'Vui lòng chờ! Dữ liệu đang được cập nhật...',
          type: 'warning',
        })
      );
    } else {
      setAlert(null);
      dispatch(
        updateUser.updateUserRequest({
          id: currentId.id,
          fullName,
          username,
          email,
          code,
          birthday,
          avatar,
          isExternal,
          role,
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
          onChange={onChangeNewStudentForm}
          value={fullName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          onChange={onChangeNewStudentForm}
          value={email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Tên đăng nhập"
          name="username"
          onChange={onChangeNewStudentForm}
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
              onChange={onChangeNewStudentForm}
              value={password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Nhập lại mật khẩu"
              type="password"
              onChange={onChangeNewStudentForm}
              value={confirmPassword}
            />
          </>
        ) : (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mã sinh viên"
              name="code"
              onChange={onChangeNewStudentForm}
              value={code}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              select
              label="Loại"
              name="isExternal"
              onChange={onChangeNewStudentForm}
              value={isExternal}
            >
              <MenuItem value={false}>Sinh viên</MenuItem>
              <MenuItem value={true}>Khách</MenuItem>
            </TextField>
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
              name="avatar"
              onChange={handleFileChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              select
              label="Quyền"
              name="role"
              onChange={onChangeNewStudentForm}
              value={role}
            >
              <MenuItem value={1}>Sinh viên</MenuItem>
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
