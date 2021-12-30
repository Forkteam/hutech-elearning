
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/overlays/data-table';
import AddModal from '../components/admin/add-modal';
import { AuthContext } from '../contexts/auth-context';
import { showModal } from '../redux/actions';
import { getUsers } from '../redux/actions/users';
import { admins$, toast$ } from '../redux/selectors';


const Admin = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const toast = useSelector(toast$);
  const admins = useSelector(admins$);


  useEffect(() => {
    dispatch(getUsers.getUsersRequest());
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
    { field: 'name', headerName: 'Họ và tên', minWidth: 200, flex: 1 },
    { field: 'age', headerName: 'Tuổi', minWidth: 50, flex: 1 },
    {
      field: 'image',
      headerName: 'Ảnh',
      width: 150,
      flex: 1,
      renderCell: (params) => (
        <img src={params.value} alt="img" style={{ width: '50px' }} />
      ),
    },
    {
      field: 'username',
      headerName: 'Tên đăng nhập',
      minWidth: 150,
      flex: 1,
      valueGetter: (param) => {
        return `${param.value.name}`;
      },
    },
    {
      field: 'user',
      headerName: 'Người tạo',
      minWidth: 140,
      flex: 1,
      valueGetter: (param) => {
        return `${param.value.fullName}`;
      },
    },
    {
      field: 'createdAt',
      headerName: 'Ngày tạo',
      type: 'date',
      minWidth: 140,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('ll')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Thời gian cập nhật',
      type: 'dateTime',
      minWidth: 120,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).fromNow()}`;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Sửa Xóa',
      minWidth: 120,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ _id }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <>
        <DataTable
          component={AddModal}
          toast={toast}
          data={admins.data}
          columns={columns}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          setShowModal={setShowModal}
        />
    </>
  );
};

export default Admin;
