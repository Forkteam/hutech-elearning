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
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth-context';

const Checkout = () => {
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
  const { identityFront, identityBack, studentCard, studentCode } = newRequest;

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
          <Box
            id="hutech-form"
            component="form"
            onSubmit={(event) => {
              event.preventDefault();
              console.log(newRequest);
            }}
          >
            <FormLabel component="legend" sx={{ color: '#121828' }}>
              Mặt trước CMND/CCCD *
            </FormLabel>
            <TextField
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
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
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
                    'thanh toan momo'
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
  );
};

export default Checkout;
