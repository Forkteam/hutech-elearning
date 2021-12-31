import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context';

export default function EditToolbar({ setShowModal }) {
  const {
    authState: { user },
  } = useContext(AuthContext);

  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
      {user?.role > 1 && (
        <Button color="primary" startIcon={<AddIcon />} onClick={setShowModal}>
          Thêm
        </Button>
      )}
    </GridToolbarContainer>
  );
}
