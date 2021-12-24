import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
// import CancelIcon from '@mui/icons-material/Close';
// import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import {
  randomCreatedDate,
  randomId,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import { useState } from 'react';

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

function EditToolbar() {
  // const { apiRef } = props;

  // const handleClick = () => {
  //   const id = randomId();
  //   apiRef.current.updateRows([{ id, isNew: true }]);
  //   apiRef.current.setRowMode(id, 'edit');
  //   // Wait for the grid to render with the new row
  //   setTimeout(() => {
  //     apiRef.current.scrollToIndexes({
  //       rowIndex: apiRef.current.getRowsCount() - 1,
  //     });

  //     apiRef.current.setCellFocus(id, 'name');
  //   });
  // };

  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <Button color="primary" startIcon={<AddIcon />}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

const Industries = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const handleCellFocusOut = (params, event) => {
    event.defaultMuiPrevented = true;
  };

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
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          //onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          //onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
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
        onPageSizeChange={(newPageSize) => handleChangeRowsPerPage(newPageSize)}
        rowsPerPageOptions={[5, 10, 25]}
        pagination
        //apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        components={{
          Toolbar: EditToolbar,
        }}
        // componentsProps={{
        //   toolbar: { apiRef },
        // }}
      />
    </div>
  );
};

export default Industries;
