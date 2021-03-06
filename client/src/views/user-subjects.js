/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from '@mui/material';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../components/overlays/data-table';
import AddModal from '../components/subjects/add-modal';
import { AuthContext } from '../contexts/auth-context';
import { showModal } from '../redux/actions';
import { getStudentSubjects } from '../redux/actions/subjects';
import { subjects$, toast$ } from '../redux/selectors';
moment.locale('vi');

const UserSubjects = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const toast = useSelector(toast$);
  const subjects = useSelector(subjects$);
  const {
    authState: { user },
  } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);
  // const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    // if (user?.role < 2)
    //   dispatch(getStudentSubjects.getStudentSubjectsRequest(user.id));
    // else dispatch(getTeacherSubjects.getTeacherSubjectsRequest(user.id));
    dispatch(getStudentSubjects.getStudentSubjectsRequest(user.id));
  }, [dispatch]);

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

  // const handleEditClick = (id) => (event) => {
  //   event.stopPropagation();
  //   dispatch(setCurrentId(id));
  // };

  // const handleDeleteClick = (id) => (event) => {
  //   event.stopPropagation();
  //   setSelectedId(id);
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setSelectedId('');
  //   setOpen(false);
  // };

  // const handleAgree = (id) => {
  //   dispatch(deleteSubject.deleteSubjectRequest(id));
  //   setSelectedId('');
  //   setOpen(false);
  // };

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
      headerName: 'T??n t??i li???u',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Link to={`subjects/${params.id}`}>{params.value}</Link>
      ),
    },
    {
      field: 'industryId',
      headerName: 'L??nh v???c',
      minWidth: 150,
      flex: 1,
      valueGetter: (param) => {
        return `${param.value.name}`;
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
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).fromNow()}`;
      },
    },
  ];

  return (
    <>
      {/* <DeleteButton
        open={open}
        id={selectedId}
        handleClose={handleClose}
        handleAgree={handleAgree}
      /> */}
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
  );
};

export default UserSubjects;
