import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import TocIcon from '@mui/icons-material/Toc';
import WindowIcon from '@mui/icons-material/Window';
import { Box, CircularProgress, Tab, Tabs } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../components/overlays/data-table';
import AddModal from '../components/subjects/add-modal';
import DataCard from '../components/subjects/data-card';
import { AuthContext } from '../contexts/auth-context';
import { showModal } from '../redux/actions';
import { getAllSubjects } from '../redux/actions/subjects';
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

  useEffect(() => {
    dispatch(getAllSubjects.getAllSubjectsRequest());
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

  const columns = [
    {
      field: 'image',
      headerName: '#',
      width: 75,
      editable: true,
      renderCell: (params) => (
        <img src={params.value} alt="img" style={{ width: '50px' }} />
      ),
    },
    {
      field: 'name',
      headerName: 'Tên môn học',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Link to={`subjects/${params.id}`}>{params.value}</Link>
      ),
    },
    // { field: 'description', headerName: 'Mô tả', minWidth: 250, flex: 1 },
    {
      field: 'industryId',
      headerName: 'Ngành',
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
      headerName: 'Cập nhật lần cuối',
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
      <AddModal />
      {user?.role > 1 && (
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
                label="grid"
                sx={{ minHeight: '50px' }}
              />
              <Tab
                icon={<TocIcon />}
                iconPosition="start"
                label="table"
                disabled={user?.role < 2}
                sx={{ minHeight: '50px' }}
              />
            </Tabs>
          </Box>
        </Box>
      )}
      {value === 0 && <DataCard subjects={subjects.data} />}
      {value === 1 && (
        <DataTable
          component={AddModal}
          toast={toast}
          data={subjects.data}
          columns={columns}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Subjects;
