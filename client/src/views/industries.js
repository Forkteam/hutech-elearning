import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
// import CancelIcon from '@mui/icons-material/Close';
// import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomId,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddModal from '../components/industries/add-modal';
import Tooltip from '../components/layout/tooltip';
import { showModal } from '../redux/actions';
import { toast$ } from '../redux/selectors';

const rows = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

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
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const toast = useSelector(toast$);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  // const handleRowEditStart = (params, event) => {
  //   event.defaultMuiPrevented = true;
  // };
  // const handleRowEditStop = (params, event) => {
  //   event.defaultMuiPrevented = true;
  // };
  // const handleCellFocusOut = (params, event) => {
  //   event.defaultMuiPrevented = true;
  // };

  // const handleEditClick = (id) => (event) => {
  //   event.stopPropagation();
  //   apiRef.current.setRowMode(id, 'edit');
  // };
  // const handleSaveClick = (id) => (event) => {
  //   event.stopPropagation();
  //   apiRef.current.commitRowChange(id);
  //   apiRef.current.setRowMode(id, 'view');
  //   const row = apiRef.current.getRow(id);
  //   apiRef.current.updateRows([{ ...row, isNew: false }]);
  // };
  // const handleDeleteClick = (id) => (event) => {
  //   event.stopPropagation();
  //   apiRef.current.updateRows([{ id, _action: 'delete' }]);
  // };
  // const handleCancelClick = (id) => (event) => {
  //   event.stopPropagation();
  //   apiRef.current.setRowMode(id, 'view');
  //   const row = apiRef.current.getRow(id);
  //   if (row.isNew) {
  //     apiRef.current.updateRows([{ id, _action: 'delete' }]);
  //   }
  // };

  const columns = [
    { field: 'name', headerName: 'Name', minWidth: 180 },
    {
      field: 'age',
      headerName: 'Age',
      minWidth: 100,
      type: 'number',
    },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      minWidth: 180,
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      minWidth: 220,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      minWidth: 100,
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
          rows={rows}
          columns={columns}
          pageSize={rowsPerPage}
          onPageSizeChange={(newPageSize) =>
            handleChangeRowsPerPage(newPageSize)
          }
          rowsPerPageOptions={[5, 10, 25]}
          pagination
          editMode="row"
          //apiRef={apiRef}
          // onRowEditStart={handleRowEditStart}
          // onRowEditStop={handleRowEditStop}
          // onCellFocusOut={handleCellFocusOut}
          components={{
            Toolbar: EditToolbar,
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
