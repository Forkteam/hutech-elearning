import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import ImportModal from '../students/import-modal';

export default function EditToolbar({ setShowModal }) {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const location = useLocation();
  const [openImport, setOpenImport] = useState(false);

  return (
    <>
      {user?.role > 1 && location.pathname === '/students' && (
        <ImportModal openImport={openImport} setOpenImport={setOpenImport} />
      )}
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport />
        {user?.role > 1 && (
          <Button
            color="primary"
            startIcon={<AddIcon />}
            onClick={setShowModal}
            sx={{ fontSize: '0.85rem' }}
          >
            Thêm
          </Button>
        )}
        {user?.role > 1 && location.pathname === '/students' && (
          <Button
            color="primary"
            startIcon={<FileUploadIcon />}
            onClick={() => setOpenImport(true)}
            sx={{ fontSize: '0.85rem' }}
          >
            Nhập excel
          </Button>
        )}
      </GridToolbarContainer>
    </>
  );
}
