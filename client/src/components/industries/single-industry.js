import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const SingleIndustry = ({ subject }) => {
  return (
    <TableRow key={subject.name}>
      <TableCell component="th" scope="row">
        {subject.name}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {subject.calories}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {subject.fat}
      </TableCell>
    </TableRow>
  );
};

export default SingleIndustry;
