/* eslint-disable react-hooks/exhaustive-deps */
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DataTable from '../components/overlays/data-table';
import DeleteButton from '../components/overlays/delete-button';
import AddModal from '../components/students/add-modal';
import { AuthContext } from '../contexts/auth-context';
import { setCurrentId, showModal } from '../redux/actions';
import { deleteUser, getUsers } from '../redux/actions/users';
import { students$, toast$ } from '../redux/selectors';
moment.locale('vi');

const Students = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const toast = useSelector(toast$);
  const students = useSelector(students$);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    dispatch(getUsers.getUsersRequest(1));
  }, [dispatch]);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (user?.role < 2) {
    return <Redirect to="/404" />;
  }
  if (students.loading) {
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

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    dispatch(setCurrentId(id));
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedId('');
    setOpen(false);
  };

  const handleAgree = (id) => {
    dispatch(deleteUser.deleteUserRequest(id));
    setSelectedId('');
    setOpen(false);
  };

  const columns = [
    {
      field: 'avatar',
      disableExport: true,
      headerName: '#',
      width: 65,
      filterable: false,
      renderCell: (params) => (
        <img
          src={
            params.value ||
            'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          }
          alt="img"
          style={{ width: '40px' }}
        />
      ),
    },
    { field: 'fullName', headerName: 'T??n', minWidth: 180, flex: 1 },
    { field: 'email', headerName: 'Email', minWidth: 200, flex: 1 },
    { field: 'code', headerName: 'M?? sinh vi??n', minWidth: 140, flex: 1 },
    {
      field: 'isExternal',
      headerName: 'Lo???i',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return param.value ? 'Kh??ch' : 'Th??nh vi??n';
      },
    },
    {
      field: 'birthday',
      headerName: 'Ng??y sinh',
      type: 'dateTime',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('l')}`;
      },
    },
    {
      field: 'createdAt',
      headerName: 'Ng??y t???o',
      type: 'date',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('l')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'L???n cu???i c???p nh???t',
      type: 'dateTime',
      minWidth: 140,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).fromNow()}`;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Thao t??c',
      minWidth: 100,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }) =>
        user?.role > 1
          ? [
              <GridActionsCellItem
                icon={<EditIcon color="warning" />}
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
            ]
          : [],
    },
  ];

  return (
    <>
      <DeleteButton
        open={open}
        id={selectedId}
        handleClose={handleClose}
        handleAgree={handleAgree}
      />
      <DataTable
        component={AddModal}
        toast={toast}
        data={students.data}
        columns={columns}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Students;
