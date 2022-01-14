/* eslint-disable react-hooks/exhaustive-deps */
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import TocIcon from '@mui/icons-material/Toc';
import WindowIcon from '@mui/icons-material/Window';
import { Box, CircularProgress, Tab, Tabs, Typography } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../components/overlays/data-table';
import DeleteButton from '../components/overlays/delete-button';
import AddModal from '../components/subjects/add-modal';
import DataCard from '../components/subjects/data-card';
import { AuthContext } from '../contexts/auth-context';
import { setCurrentId, showModal } from '../redux/actions';
import {
  deleteSubject,
  getAllSubjects,
  getAllPublicSubjects,
} from '../redux/actions/subjects';
import { subjects$, toast$ } from '../redux/selectors';
moment.locale('vi');

const Subjects = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [value, setValue] = useState(0);
  const toast = useSelector(toast$);
  const subjects = useSelector(subjects$);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    if (user?.isExternal && user?.role < 2)
      dispatch(getAllPublicSubjects.getAllPublicSubjectsRequest());
    else dispatch(getAllSubjects.getAllSubjectsRequest());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (subjects.loading) {
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
    dispatch(deleteSubject.deleteSubjectRequest(id));
    setSelectedId('');
    setOpen(false);
  };

  const columns = [
    {
      field: 'image',
      disableExport: true,
      headerName: '#',
      width: 75,
      filterable: false,
      renderCell: (params) => (
        <img src={params.value} alt="img" style={{ width: '50px' }} />
      ),
    },
    {
      field: 'name',
      headerName: 'Tên tài liệu',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Link to={`subjects/${params.id}`}>{params.value}</Link>
      ),
    },
    {
      field: 'industryId',
      headerName: 'Lĩnh vực',
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
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('l')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Lần cuối cập nhật',
      type: 'dateTime',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).fromNow()}`;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Thao tác',
      minWidth: 75,
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
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="tabs"
          >
            <Tab
              icon={<WindowIcon />}
              iconPosition="start"
              label="dạng lưới"
              sx={{ minHeight: '50px' }}
            />
            <Tab
              icon={<TocIcon />}
              iconPosition="start"
              label="dạng bảng"
              sx={{ minHeight: '50px' }}
            />
          </Tabs>
        </Box>
      </Box>
      {user?.role < 2 && user?.isExternal && (
        <Typography sx={{ mx: 'auto', textAlign: 'center', mt: 1, px: 1 }}>
          Vui lòng nâng cấp tài khoản để xem tài liệu dành riêng cho tài khoản
          thành viên!{' '}
          <Link to="/upgrade" className="hover-link">
            Nâng cấp ngay
          </Link>
        </Typography>
      )}
      {value === 0 && <DataCard subjects={subjects.data} />}
      {value === 1 && (
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
            data={subjects.data}
            columns={columns}
            rowsPerPage={rowsPerPage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            setShowModal={setShowModal}
          />
        </>
      )}
    </>
  );
};

export default Subjects;
