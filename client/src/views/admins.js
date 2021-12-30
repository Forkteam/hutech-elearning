/* eslint-disable react-hooks/exhaustive-deps */
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddModal from '../components/admins/add-modal';
import DataTable from '../components/overlays/data-table';
import { showModal } from '../redux/actions';
import { getUsers } from '../redux/actions/users';
import { admins$, toast$ } from '../redux/selectors';
moment.locale('vi');

const Admins = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const toast = useSelector(toast$);
  const admins = useSelector(admins$);

  useEffect(() => {
    dispatch(getUsers.getUsersRequest(2));
  }, [dispatch]);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (admins.loading) {
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
  const columns = [
    { field: 'fullName', headerName: 'Tên', minWidth: 180, flex: 1 },
    { field: 'email', headerName: 'Email', minWidth: 200, flex: 1 },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 120,
      flex: 1,
      valueGetter: (param) => {
        return param.value < 3 ? 'Admin' : 'Super admin';
      },
    },
    {
      field: 'birthday',
      headerName: 'Ngày sinh',
      type: 'dateTime',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('l')}`;
      },
    },
    {
      field: 'user',
      headerName: 'Người tạo',
      minWidth: 140,
      flex: 1,
      valueGetter: (param) => {
        return param.value?.fullName ? param.value.fullName : '';
      },
    },
    {
      field: 'createdAt',
      headerName: 'Ngày tạo',
      type: 'date',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('l')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Cập nhật lần cuối',
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
      headerName: 'Thao tác',
      minWidth: 100,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ _id }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          //onClick={handleEditClick(_id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          //onClick={handleDeleteClick(_id)}
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <DataTable
      component={AddModal}
      toast={toast}
      data={admins.data}
      columns={columns}
      rowsPerPage={rowsPerPage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      setShowModal={setShowModal}
    />
  );
};

export default Admins;
