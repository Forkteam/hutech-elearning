import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddModal from '../components/industries/add-modal';
import DataTable from '../components/overlays/data-table';
import DeleteButton from '../components/overlays/delete-button';
import { AuthContext } from '../contexts/auth-context';
import { setCurrentId, showModal } from '../redux/actions';
import { deleteIndustry, getIndustries } from '../redux/actions/industries';
import { industries$, toast$ } from '../redux/selectors';
moment.locale('vi');

const Industries = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const toast = useSelector(toast$);
  const industries = useSelector(industries$);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    dispatch(getIndustries.getIndustriesRequest());
  }, [dispatch]);

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (user?.role < 2) {
    return <Redirect to="/404" />;
  }
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

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    dispatch(setCurrentId(id));
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedId('');
    setOpen(false);
  };

  const handleAgree = (id) => {
    dispatch(deleteIndustry.deleteIndustryRequest(id));
    setSelectedId('');
    setOpen(false);
  };

  const columns = [
    { field: 'code', headerName: 'M?? L??nh v???c', minWidth: 100, flex: 1 },
    { field: 'name', headerName: 'T??n L??nh v???c', minWidth: 250, flex: 1 },
    {
      field: 'createdAt',
      headerName: 'Ng??y t???o',
      type: 'date',
      minWidth: 100,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('l')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'L???n cu???i c???p nh???t',
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
      headerName: 'Thao t??c',
      minWidth: 150,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }) =>
        user?.role > 1
          ? [
              <GridActionsCellItem
                icon={<EditIcon color="warning" />}
                label="Edit"
                className="textPrimary"
                onClick={handleEditClick(id)}
                color="inherit"
              />,
              <GridActionsCellItem
                icon={<DeleteForeverRoundedIcon color="error" />}
                label="Delete"
                onClick={handleDeleteClick(id)}
                color="inherit"
              />,
            ]
          : [],
    },
  ];

  return (
    <>
      <DeleteButton
        open={open}
        id={selectedId}
        handleClose={handleClose}
        handleAgree={handleAgree}
      />
      <DataTable
        component={AddModal}
        toast={toast}
        data={industries.data}
        columns={columns}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Industries;
