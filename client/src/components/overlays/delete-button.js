import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Transition from '../layouts/transition';

const DeleteButton = ({ open, id, handleClose, handleAgree }) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn sẽ không thể khôi phục lại dữ liệu này
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Trở lại</Button>
          <Button onClick={() => handleAgree(id)}>Đồng ý</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
