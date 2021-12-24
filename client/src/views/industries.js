import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddModal from '../components/industries/add-modal';
import Tooltip from '../components/overlays/tooltip';
import { showModal } from '../redux/actions';
import { getIndustries } from '../redux/actions/industries';
import { toast$, industries$ } from '../redux/selectors';
import CustomNoRowsOverlay from '../components/overlays/NoRowsOverlay';
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';

function EditToolbar({ setShowModal }) {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <Button color="primary" startIcon={<AddIcon />} onClick={setShowModal}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

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
    <>
      <AddModal />
      <Tooltip toast={toast} />
      <div
        style={{
          height: '85%',
          width: '95%',
          margin: '10px auto',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGrid
          rows={industries.data}
          columns={columns}
          pageSize={rowsPerPage}
          onPageSizeChange={(newPageSize) =>
            handleChangeRowsPerPage(newPageSize)
          }
          rowsPerPageOptions={[7, 15, 30]}
          pagination
          editMode="row"
          components={{
            Toolbar: EditToolbar,
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          componentsProps={{
            toolbar: { setShowModal },
          }}
          sx={{
            backgroundColor: 'white',
            boxShadow: 3,
          }}
        />
      </div>
    </>
  );
};

export default Industries;
