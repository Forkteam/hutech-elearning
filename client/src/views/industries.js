import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddModal from '../components/industries/add-modal';
import DataTable from '../components/overlays/data-table';
import { showModal } from '../redux/actions';
import { getIndustries } from '../redux/actions/industries';
import { industries$, toast$ } from '../redux/selectors';

const Industries = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const toast = useSelector(toast$);
  const industries = useSelector(industries$);

  useEffect(() => {
    dispatch(getIndustries.getIndustriesRequest());
  }, [dispatch]);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (industries.loading) {
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
  //   apiRef.current.setRowMode(id, 'edit');
  // };

  // const handleDeleteClick = (id) => (event) => {
  //   event.stopPropagation();
  //   apiRef.current.updateRows([{ id, _action: 'delete' }]);
  // };

  const columns = [
    { field: 'code', headerName: 'Code', minWidth: 100, flex: 1 },
    { field: 'name', headerName: 'Name', minWidth: 250, flex: 1 },
    {
      field: 'user',
      headerName: 'User Created',
      minWidth: 180,
      flex: 1,
      valueGetter: (param) => {
        return `${param.value.fullName}`;
      },
    },
    {
      field: 'createdAt',
      headerName: 'Date Created',
      type: 'date',
      minWidth: 150,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('ll')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Last Updated',
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
      headerName: 'Actions',
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
    <DataTable
      component={AddModal}
      toast={toast}
      data={industries.data}
      columns={columns}
      rowsPerPage={rowsPerPage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      setShowModal={setShowModal}
    />
  );
};

export default Industries;