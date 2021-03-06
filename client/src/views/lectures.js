/* eslint-disable react-hooks/exhaustive-deps */
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Chip,
  Typography,
} from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/layouts/back-button';
import AddModal from '../components/lectures/add-modal';
import DataTable from '../components/overlays/data-table';
import DeleteButton from '../components/overlays/delete-button';
import SubscribeButton from '../components/subjects/subscribe-button';
import { AuthContext } from '../contexts/auth-context';
import { setCurrentId, showModal } from '../redux/actions';
import { deleteLecture, getLectures } from '../redux/actions/lectures';
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
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const {
    authState: { user },
  } = useContext(AuthContext);

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
    dispatch(deleteLecture.deleteLectureRequest(id));
    setSelectedId('');
    setOpen(false);
  };

  const columns = [
    {
      field: 'title',
      headerName: 'B??i h???c',
      minWidth: 200,
      flex: 1,
      renderCell: (params) => (
        <Link to={`lectures/${params.id}`}>{params.value}</Link>
      ),
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
      minWidth: 150,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).fromNow()}`;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Thao t??c',
      minWidth: 150,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }) =>
        user?.role > 2
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
      <div className="jc-sb flex">
        <BackButton />
        <SubscribeButton subjectId={subjectId} />
      </div>
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
            Ng??y ????ng:{' '}
            {moment(subjects.singleSubject?.createdAt ?? '2001-01-21').format(
              'lll'
            )}{' '}
            - L???n cu???i c???p nh???t:{' '}
            {moment(subjects.singleSubject?.updatedAt ?? '2001-01-21').format(
              'lll'
            )}
            <br />
            Ng?????i t???o: {subjects.singleSubject?.user.fullName ?? 'Admin'}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {subjects.singleSubject?.description ?? ''}
          </Typography>
          <Chip
            icon={<ThumbUpIcon fontSize="small" />}
            label={`${
              subjects.singleSubject?.studentIds.length ?? 0
            } L?????t y??u th??ch`}
          />
        </CardContent>
      </Card>
      <DeleteButton
        open={open}
        id={selectedId}
        handleClose={handleClose}
        handleAgree={handleAgree}
      />
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
