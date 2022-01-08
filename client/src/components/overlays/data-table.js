import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import Tooltip from '../layouts/tooltip';
import CustomNoRowsOverlay from './no-rows';
import EditToolbar from './toolbar';

const DataTable = ({
  component: AddModal,
  toast,
  data,
  columns,
  rowsPerPage,
  handleChangeRowsPerPage,
  setShowModal,
}) => {
  const location = useLocation();
  return (
    <>
      <AddModal />
      <Tooltip toast={toast} />
      <div
        style={{
          paddingBottom:
            (location.pathname.split('/')[1] !== 'subjects' &&
              location.pathname.split('/')[1] !== 'news') ||
            location.pathname.split('/')[2] !== 'lectures'
              ? '0px'
              : '150px',
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
