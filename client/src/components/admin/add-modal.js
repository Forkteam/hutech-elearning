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
import { createUser } from '../../redux/actions/users';
import { currentId$, modal$ } from '../../redux/selectors';
import Transition from '../overlays/transition';

const AddModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modal$);
  const currentId = useSelector(currentId$);
  const [newAdmin, setNewAdmin] = useState({
    image: '',
    name: '',
    age: '',
    sex: 'Nam',
    username: '',
    password: ''
  });
  const { name, age, sex, username, password } = newAdmin;

  useEffect(() => {
    dispatch(getIndustries.getIndustriesRequest());
  }, [dispatch]);

  const onChangeNewAdminForm = (event) => {
    setNewAdmin({ ...newAdmin, [event.target.name]: event.target.value });
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
    setNewAdmin({ ...newAdmin, image: base64image });
  };

  const closeDialog = () => {
    setNewAdmin({
        image: '',
        name: '',
        age: '',
        sex: 'Nam',
        username: '',
        password: ''
    });
    dispatch(hideModal());
    if (currentId._id !== 0) dispatch(setCurrentId(0));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (currentId._id === 0) {
      await dispatch(createUser.createUserRequest(newAdmin));
      await dispatch(
        showToast({
          message: 'Vui lòng đợi! Đang xử lý...',
          type: 'warning',
        })
      );
    } else {
      console.log('update Admin');
      await dispatch(
        showToast({
          message: 'Vui lòng đợi! Đang cập nhật...',
          type: 'warning',
        })
      );
    }
    closeDialog();
  };

  return (
    <Dialog TransitionComponent={Transition} open={modal.show} scroll="body">
      <DialogTitle>Tạo tài khoản Admin</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            margin="dense"
            type="text"
            required
            fullWidth
            variant="standard"
            autoFocus
            label="Họ và tên"
            name="name"
            value={name}
            onChange={onChangeNewAdminForm}
          />
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="Tuổi"
            name="age"
            value={age}
            onChange={onChangeNewAdminForm}
          />
          <TextField
            margin="dense"
            required
            fullWidth
            variant="standard"
            select
            label="Giới tính"
            name="sex"
            value={sex}
            onChange={onChangeNewAdminForm}
          >
            <MenuItem value={'Male'}>Nam</MenuItem>
            <MenuItem value={'Female'}>Nữ</MenuItem>
          </TextField>
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="Tên đăng nhập"
            name="username"
            value={username}
            onChange={onChangeNewAdminForm}
          />
          <TextField
            margin="dense"
            multiline
            required
            fullWidth
            variant="standard"
            label="Mật khẩu"
            name="password"
            value={password}
            onChange={onChangeNewAdminForm}
          />
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
