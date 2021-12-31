/* eslint-disable react-hooks/exhaustive-deps */
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/layouts/back-button';
import AddModal from '../components/lectures/add-modal';
import DataTable from '../components/overlays/data-table';
import { showModal } from '../redux/actions';
import { getLectures } from '../redux/actions/lectures';
import { getSubjectDetail } from '../redux/actions/subjects';
import { lectures$, subjects$, toast$ } from '../redux/selectors';
moment.locale('vi');

const Lectures = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const { id: subjectId } = useParams();
  const toast = useSelector(toast$);
  const lectures = useSelector(lectures$);
  const subjects = useSelector(subjects$);

  useEffect(() => {
    dispatch(getSubjectDetail.getSubjectDetailRequest(subjectId));
    dispatch(getLectures.getLecturesRequest(subjectId));
  }, [dispatch]);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (subjects.loading || lectures.loading) {
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
      field: 'title',
      headerName: 'Tên',
      minWidth: 200,
      flex: 1,
      renderCell: (params) => (
        <Link to={`lectures/${params.id}`}>{params.value}</Link>
      ),
    },
    {
      field: 'user',
      headerName: 'Người tạo',
      minWidth: 150,
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
      minWidth: 150,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).fromNow()}`;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Thao tác',
      minWidth: 150,
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
    <>
      <BackButton />
      <Card
        sx={{ margin: 'auto', display: 'flex', width: '95%', boxShadow: 3 }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
          image={subjects.singleSubject?.image ?? ''}
          alt={subjects.singleSubject?.name ?? 'subject'}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {subjects.singleSubject?.name ?? ''}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Ngày đăng:{' '}
            {moment(subjects.singleSubject?.createdAt ?? '2001-01-21').format(
              'l'
            )}{' '}
            - Cập nhật lần cuối{' '}
            {moment(subjects.singleSubject?.updatedAt ?? '2001-01-21').format(
              'l'
            )}
            <br />
            Người tạo: {subjects.singleSubject?.user.fullName ?? 'Admin'}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {subjects.singleSubject?.description ?? ''}
          </Typography>
        </CardContent>
      </Card>
      <DataTable
        component={AddModal}
        toast={toast}
        data={lectures.data}
        columns={columns}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Lectures;
