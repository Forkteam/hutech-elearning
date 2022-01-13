import { DataGrid } from '@mui/x-data-grid';
import CustomNoRowsOverlay from '../overlays/no-rows';
import EditToolbar from './toolbar';

const DataTable = ({ data, columns, rowsPerPage, handleChangeRowsPerPage }) => {
  return (
    <div
      style={{
        paddingBottom: '0px',
        height: '530px',
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
        rows={data}
        columns={columns}
        pageSize={rowsPerPage}
        onPageSizeChange={(newPageSize) => handleChangeRowsPerPage(newPageSize)}
        rowsPerPageOptions={[7, 15, 30]}
        pagination
        editMode="row"
        components={{
          Toolbar: EditToolbar,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          backgroundColor: 'white',
          boxShadow: 3,
        }}
      />
    </div>
  );
};

export default DataTable;
