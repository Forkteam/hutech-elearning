import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import { Fragment, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Tooltip from '../components/layouts/tooltip';
import { AuthContext } from '../contexts/auth-context';
import { showToast } from '../redux/actions';
import { createRequest } from '../redux/actions/requests';
import { toast$ } from '../redux/selectors';

const Checkout = () => {
  const dispatch = useDispatch();
  const toast = useSelector(toast$);
  const [activeStep, setActiveStep] = useState(0);
  const [isHutech, setIsHutech] = useState('external');
  const [newRequest, setNewRequest] = useState({
    identityFront: '',
    identityBack: '',
    studentCard: '',
    studentCode: '',
  });
  const {
    authState: { user },
  } = useContext(AuthContext);
  const steps = ['Bước 1', 'Bước 2'];
  const { studentCode } = newRequest;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
    setNewRequest({ ...newRequest, [event.target.name]: base64image });
  };
  const onChangeNewRequestForm = (event) => {
    setNewRequest({ ...newRequest, [event.target.name]: event.target.value });
  };

  const onSubmitHutech = (event) => {
    event.preventDefault();
    dispatch(createRequest.createRequestRequest(newRequest));
    dispatch(
      showToast({
        message: 'Vui lòng chờ! Dữ liệu đang được cập nhật...',
        type: 'warning',
      })
    );
    handleNext();
    document.getElementById('identityFront').value = '';
    document.getElementById('identityBack').value = '';
    document.getElementById('studentCard').value = '';
    setNewRequest({
      identityFront: '',
      identityBack: '',
      studentCard: '',
      studentCode: '',
    });
  };

  if (user?.role > 1 || !user?.isExternal) {
    return <Redirect to="/404" />;
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">Lựa chọn</FormLabel>
            <RadioGroup
              aria-label="select"
              value={isHutech}
              onChange={(event) => setIsHutech(event.target.value)}
            >
              <FormControlLabel
                value="external"
                control={<Radio />}
                label="Tôi không phải sinh viên HUTECH"
              />
              <FormControlLabel
                value="hutech"
                control={<Radio />}
                label="Tôi là sinh viên HUTECH"
              />
            </RadioGroup>
          </FormControl>
        );
      case 1:
        return isHutech === 'hutech' ? (
          <Box id="hutech-form" component="form" onSubmit={onSubmitHutech}>
            <FormLabel component="legend" sx={{ color: '#121828' }}>
              Mặt trước CMND/CCCD *
            </FormLabel>
            <TextField
              id="identityFront"
              margin="dense"
              type="file"
              accept="image/*"
              multiple={false}
              fullWidth
              required
              variant="standard"
              name="identityFront"
              onChange={handleFileChange}
            />
            <FormLabel component="legend" sx={{ color: '#121828', mt: 3 }}>
              Mặt sau CMND/CCCD *
            </FormLabel>
            <TextField
              id="identityBack"
              margin="dense"
              type="file"
              accept="image/*"
              multiple={false}
              fullWidth
              required
              variant="standard"
              name="identityBack"
              onChange={handleFileChange}
            />
            <FormLabel component="legend" sx={{ color: '#121828', mt: 3 }}>
              Thẻ sinh viên *
            </FormLabel>
            <TextField
              id="studentCard"
              margin="dense"
              type="file"
              accept="image/*"
              multiple={false}
              fullWidth
              required
              variant="standard"
              name="studentCard"
              onChange={handleFileChange}
            />
            <FormLabel component="legend" sx={{ color: '#121828', mt: 3 }}>
              Mã sinh viên *
            </FormLabel>
            <TextField
              margin="dense"
              type="text"
              required
              fullWidth
              variant="standard"
              name="studentCode"
              value={studentCode}
              onChange={onChangeNewRequestForm}
            />
          </Box>
        ) : (
          <>momo payment</>
        );
      default:
        return 'Unknown step';
    }
  };

  const HutechButton = () => (
    <Button
      variant="contained"
      form="hutech-form"
      type="submit"
      sx={{ mt: 3, ml: 1 }}
    >
      Xác nhận
    </Button>
  );

  const NextButton = () => (
    <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
      Tiếp theo
    </Button>
  );

  return (
    <>
      <Tooltip toast={toast} />
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: 2, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Nâng cấp tài khoản
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
            {activeStep === steps.length ? (
              <Fragment>
                <Typography variant="h5" gutterBottom>
                  Cảm ơn bạn đã gửi yêu cầu.
                </Typography>
                <Typography variant="subtitle1">
                  Chúng tôi đã nhận được yêu cầu của bạn, vui lòng chờ chúng tôi
                  xét duyệt và phản hồi lại qua email bạn đã cung cấp trong thời
                  gian sớm nhất.
                </Typography>
                <Typography variant="body1">
                  Nếu đơn yêu cầu của bạn có sai sót, bạn có thể tải lại trang
                  và gửi lại cho chúng tôi
                </Typography>
                <Link to="/subjects">
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      mx: 'auto',
                      display: 'flow-root',
                    }}
                  >
                    Trở về danh sách môn học
                  </Button>
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep > 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Trở lại
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? (
                    isHutech === 'hutech' ? (
                      <HutechButton />
                    ) : (
                      <NextButton />
                    )
                  ) : (
                    <NextButton />
                  )}
                </Box>
              </Fragment>
            )}
          </Fragment>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
