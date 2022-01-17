/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import TocIcon from '@mui/icons-material/Toc';
import WindowIcon from '@mui/icons-material/Window';
import {
  Box,
  CircularProgress,
  Tab,
  Tabs,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
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
import { getIndustries } from '../redux/actions/industries';
import { setCurrentId, showModal } from '../redux/actions';
import {
  deleteSubject,
  getAllPublicSubjects,
  getAllSubjects,
} from '../redux/actions/subjects';
import { subjects$, toast$, industries$ } from '../redux/selectors';
moment.locale('vi');

const Subjects = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [subjectsData, setSubjectsData] = useState({ data: [] });
  const [industryId, setIndustryId] = useState('61c59469c3342031dc62ace2');
  const [value, setValue] = useState(0);
  const toast = useSelector(toast$);
  const industries = useSelector(industries$);
  const subjects = useSelector(subjects$);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    dispatch(getIndustries.getIndustriesRequest());
    if (user?.isExternal && user?.role < 2)
      dispatch(getAllPublicSubjects.getAllPublicSubjectsRequest());
    else dispatch(getAllSubjects.getAllSubjectsRequest());
  }, [dispatch]);

  useEffect(() => {
    setSubjectsData({
      ...subjectsData,
      data: subjects.data.filter(
        (subject) => subject.industryId.id == industryId
      ),
    });
  }, [subjects]);

  useEffect(() => {
    setSubjectsData({
      ...subjectsData,
      data: subjects.data.filter(
        (subject) => subject.industryId.id == industryId
      ),
    });
  }, [industryId]);

  const onChangeIndustry = (event) => {
    setIndustryId(event.target.value);
  };

  const handleTabChange = (_, newValue) => {
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
    <div style={{ height: '160vh' }}>
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
              label="lưới"
              sx={{ minHeight: '50px' }}
            />
            <Tab
              icon={<TocIcon />}
              iconPosition="start"
              label="danh sách"
              sx={{ minHeight: '50px' }}
            />
          </Tabs>
        </Box>
      </Box>
      {user?.role < 2 && user?.isExternal && (
        <Typography sx={{ mx: 'auto', textAlign: 'center', mt: 1, px: 1 }}>
          Nâng cấp tài khoản để xem tài liệu dành riêng cho thành viên!{' '}
          <Link to="/upgrade" className="hover-link">
            Nâng cấp ngay
          </Link>
        </Typography>
      )}
      {value === 0 && (
        <>
          <TextField
            margin="dense"
            fullWidth
            select
            value={industryId}
            onChange={onChangeIndustry}
            sx={{
              alignItems: 'center',
              mx: 'auto',
              '.css-1122084-MuiInputBase-root-MuiOutlinedInput-root': {
                width: '95%',
                backgroundColor: 'white',
              },
            }}
          >
            {industries.data.map((industry) => (
              <MenuItem key={industry.id} value={industry.id}>
                {industry.name}
              </MenuItem>
            ))}
          </TextField>
          <DataCard subjects={subjectsData.data} />
        </>
      )}
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
    </div>
  );
};

export default Subjects;
