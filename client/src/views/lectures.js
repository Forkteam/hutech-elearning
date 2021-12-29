/* eslint-disable react-hooks/exhaustive-deps */
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import AddModal from '../components/lectures/add-modal';
import DataTable from '../components/overlays/data-table';
import { showModal } from '../redux/actions';
import { getLectures } from '../redux/actions/lectures';
import { lectures$, toast$ } from '../redux/selectors';
moment.locale('vi');

const Lectures = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const { id: subjectId } = useParams();
  const toast = useSelector(toast$);
  const lectures = useSelector(lectures$);

  useEffect(() => {
    dispatch(getLectures.getLecturesRequest(subjectId));
  }, [dispatch]);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (lectures.loading) {
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
    { field: 'title', headerName: 'Tên', minWidth: 200, flex: 1 },
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
      <Button
        onClick={() => history.goBack()}
        variant="body2"
        sx={{ mt: 1, ml: 1, color: '#5048E5' }}
      >
        &lt; Trở về
      </Button>
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
