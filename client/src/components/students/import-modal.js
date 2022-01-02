/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileContext } from '../../contexts/file-context';
import { showToast } from '../../redux/actions';
import { toast$ } from '../../redux/selectors';
import AlertMessage from '../layouts/alert-message';
import Transition from '../overlays/transition';

const ImportModal = ({ openImport, setOpenImport }) => {
  const dispatch = useDispatch();
  const toast = useSelector(toast$);
  const [alert, setAlert] = useState(null);
  const [fileState, setFileState] = useState({ file: '' });
  const {
    fileState: { isDisabled },
    importExcel,
    exportExcelTemplate,
  } = useContext(FileContext);

  const onFileChange = (event) => {
    setFileState({ ...fileState, file: event.target.files[0] });
  };
  const closeDialog = () => {
    setFileState({ ...fileState, file: '' });
    setOpenImport(false);
  };

  const onExportExcel = async () => {
    try {
      await exportExcelTemplate();
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setAlert(null);
    const formData = new FormData();
    formData.append('file', fileState.file);
    formData.append('id', fileState.id);

    const response = await importExcel(formData);
    dispatch(
      showToast({
        message: response.message
          ? response.message
          : 'Lỗi máy chủ. Vui lòng nhập đúng định dạng!',
        type: response.success ? 'success' : 'error',
      })
    );
    if (response.success) window.location.reload();
    else {
      setAlert({
        message: response.message
          ? response.message
          : 'Lỗi máy chủ. Vui lòng nhập đúng định dạng!',
        type: response.success ? 'success' : 'error',
      });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
  };

  return (
    <Dialog TransitionComponent={Transition} open={openImport} scroll="body">
      <DialogTitle>Tải lên</DialogTitle>
      <DialogContent dividers>
        <div style={{ marginBottom: '20px' }}>
          {alert && <AlertMessage info={alert} />}
          {!alert && <AlertMessage info={toast} />}
        </div>
        <Typography variant="subtitle1" paragraph>
          Lưu ý 1: Nếu tài khoản sinh viên đã tồn tại, một số lỗi sẽ xảy ra
          <br />
          Lưu ý 2: Trang tính excel của bạn phải khớp với mẫu của chúng tôi, nếu
          không bạn sẽ mắc một số lỗi.
        </Typography>
        <Button
          variant="outlined"
          onClick={onExportExcel}
          disabled={isDisabled}
        >
          Tải mẫu về
        </Button>
        <TextField
          margin="dense"
          type="file"
          accept=".xlsx, .xls"
          multiple={false}
          required
          fullWidth
          variant="standard"
          label="File excel"
          name="file"
          onChange={onFileChange}
          helperText="Chỉ chấp nhận file .xlsx .xls"
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

export default ImportModal;
