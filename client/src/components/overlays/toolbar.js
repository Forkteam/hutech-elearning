import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

export default function EditToolbar({ setShowModal }) {
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
