import { DataGrid } from '@mui/x-data-grid';
import CustomNoRowsOverlay from './no-rows';
import EditToolbar from './toolbar';
import Tooltip from './tooltip';

const DataTable = ({
  component: AddModal,
  toast,
  data,
  columns,
  rowsPerPage,
  handleChangeRowsPerPage,
  setShowModal,
}) => {
  return (
    <>
      <AddModal />
      <Tooltip toast={toast} />
      <div
        style={{
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
          autoHeight
          rows={data}
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

export default DataTable;
