import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Transition from '../components/layouts/transition';
import CustomNoRowsOverlay from '../components/overlays/no-rows';
import EditToolbar from '../components/requests/toolbar';
import { ACCEPTED, DENIED } from '../constants';
import { AuthContext } from '../contexts/auth-context';
import { getRequests, updateRequest } from '../redux/actions/requests';
import { requests$ } from '../redux/selectors';

const Requests = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({
    id: '',
    status: '',
  });
  const [userInfo, setUserInfo] = useState({
    id: '',
    fullName: '',
    identityFront: '',
    identityBack: '',
    studentCard: '',
    studentCode: '',
  });
  const requests = useSelector(requests$);
  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    dispatch(getRequests.getRequestsRequest());
  }, [dispatch]);

  if (user?.role < 2) {
    return <Redirect to="/404" />;
  }
  if (requests.loading) {
    return (
      <div
        style={{
          left: '50%',
          top: '50%',
          transform: 'translateY(-50%)',
          position: 'absolute',
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };
  const handleClose = () => {
    setOpenDialog(false);
    setUserInfo({
      id: '',
      fullName: '',
      identityFront: '',
      identityBack: '',
      studentCard: '',
      studentCode: '',
    });
    setOpen(false);
    setSelectedRequest({ id: '', status: '' });
  };
  const handleToggleDialog = (params) => {
    setOpenDialog(!openDialog);
    setUserInfo({
      id: params.row.id,
      fullName: params.row.user.fullName,
      identityFront: params.row.identityFront,
      identityBack: params.row.identityBack,
      studentCard: params.row.studentCard,
      studentCode: params.row.studentCode,
    });
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    setSelectedRequest({ id, status: ACCEPTED });
    setOpen(true);
  };
  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    setSelectedRequest({ id, status: DENIED });
    setOpen(true);
  };
  const handleAgree = (event) => {
    event.preventDefault();
    dispatch(updateRequest.updateRequestRequest(selectedRequest));
    handleClose();
  };
  const handleAccept = (event) => {
    event.preventDefault();
    dispatch(
      updateRequest.updateRequestRequest({ id: userInfo.id, status: ACCEPTED })
    );
    handleClose();
  };
  const handleDeny = (event) => {
    event.preventDefault();
    dispatch(
      updateRequest.updateRequestRequest({ id: userInfo.id, status: DENIED })
    );
    handleClose();
  };

  const columns = [
    {
      field: 'user',
      headerName: 'Tên',
      minWidth: 100,
      flex: 1,
      valueGetter: (params) => params.value.fullName,
    },
    {
      field: 'studentCode',
      headerName: 'Mã sinh viên',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'studentCard',
      headerName: 'Student Card',
      minWidth: 200,
      filterable: false,
      renderCell: (params) => (
        <img
          src={
            params.value ||
            'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          }
          alt="img"
          style={{ width: '200px' }}
        />
      ),
    },
    {
      field: 'identityFront',
      headerName: 'identity Front',
      minWidth: 200,
      filterable: false,
      renderCell: (params) => (
        <img
          src={
            params.value ||
            'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          }
          alt="img"
          style={{ width: '200px' }}
        />
      ),
    },
    {
      field: 'identityBack',
      headerName: 'identity Back',
      minWidth: 200,
      filterable: false,
      renderCell: (params) => (
        <img
          src={
            params.value ||
            'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          }
          alt="img"
          style={{ width: '200px' }}
        />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Thao tác',
      minWidth: 100,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<CheckCircleRoundedIcon color="success" />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteForeverRoundedIcon color="error" />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Trở lại</Button>
          <Button onClick={handleAgree}>Đồng ý</Button>
        </DialogActions>
      </Dialog>
      <Dialog TransitionComponent={Transition} open={openDialog} scroll="body">
        <DialogTitle>
          {userInfo.fullName} - {userInfo.studentCode}
        </DialogTitle>
        <DialogContent dividers sx={{ textAlign: 'center' }}>
          <img
            src={userInfo.identityFront}
            alt={userInfo.fullName}
            style={{ width: '280px' }}
          />
          <img
            src={userInfo.identityBack}
            alt={userInfo.fullName}
            style={{ width: '280px' }}
          />
          <img
            src={userInfo.studentCard}
            alt={userInfo.fullName}
            style={{ width: '280px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Trở về
          </Button>
          <Button color="error" variant="contained" onClick={handleDeny}>
            Từ chối
          </Button>
          <Button
            autoFocus
            color="success"
            variant="contained"
            onClick={handleAccept}
          >
            Duyệt
          </Button>
        </DialogActions>
      </Dialog>
      <div
        style={{
          paddingBottom: '0px',
          height: '530px',
          width: '95%',
          margin: '10px auto',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGrid
          rows={requests.data}
          rowHeight={100}
          columns={columns}
          pageSize={rowsPerPage}
          onPageSizeChange={(newPageSize) =>
            handleChangeRowsPerPage(newPageSize)
          }
          rowsPerPageOptions={[7, 15, 30]}
          pagination
          editMode="row"
          components={{
            Toolbar: EditToolbar,
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          sx={{
            backgroundColor: 'white',
            boxShadow: 3,
          }}
          onRowClick={(params) => handleToggleDialog(params)}
        />
      </div>
    </>
  );
};

export default Requests;
