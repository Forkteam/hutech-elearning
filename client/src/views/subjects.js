import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import TocIcon from '@mui/icons-material/Toc';
import WindowIcon from '@mui/icons-material/Window';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { GridActionsCellItem } from '@mui/x-data-grid';
import moment from 'moment';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/overlays/data-table';
import AddModal from '../components/subjects/add-modal';
import DataCard from '../components/subjects/data-card';
import { AuthContext } from '../contexts/auth-context';
import { showModal } from '../redux/actions';
import { getAllSubjects } from '../redux/actions/subjects';
import { subjects$, toast$ } from '../redux/selectors';

const items = [
  {
    image:
      'https://bachasoftware.com/wp-content/uploads/elementor/thumbs/nodejslogo-p3zvdhaajh0bxurlgqp1gszveuzuf58gd4auf7uve8.png',
    title: 'Node JS',
    description:
      'Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng',
  },
  {
    image:
      'https://laptrinhcanban.com/css/images/page/java-co-ban-cho-nguoi-moi-bat-dau.webp?ezimgfmt=rs%3Adevice%2Frscb2-1',
    title: 'Java',
    description:
      'Java là một ngôn ngữ lập trình hướng đối tượng, dựa trên lớp được thiết kế để có càng ít phụ thuộc thực thi càng tốt',
  },
  {
    image:
      'https://laptrinhcanban.com/css/images/page/c-programe.webp?ezimgfmt=rs%3Adevice%2Frscb2-1',
    title: 'C',
    description:
      'Ngôn ngữ lập trình C là một ngôn ngữ mệnh lệnh được phát triển từ đầu thập niên 1970 bởi Dennis Ritchie để dùng trong hệ điều hành UNIX. Từ đó, ngôn ngữ này đã lan rộng ra nhiều hệ điều hành khác và trở thành một những ngôn ngữ phổ dụng nhất',
  },
  {
    image: 'https://vnypc.files.wordpress.com/2016/11/html_css.jpg?w=300&h=200',
    title: 'HTML/CSS',
    description:
      'HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản, CSS (hay Cascading Style Sheet language) được định nghĩa là ngôn ngữ tạo phong cách cho trang web',
  },
  {
    image:
      'https://thienanblog.com/wp-content/uploads/2015/04/javascript_logo.png',
    title: 'JavaScript',
    description:
      'JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như phía máy chủ',
  },
  {
    image: 'https://zigexn-ventura.github.io/assets/images/react-logo.png',
    title: 'React JS',
    description:
      'Được dịch từ tiếng Anh-React là một thư viện JavaScript front-end mã nguồn mở miễn phí để xây dựng giao diện người dùng dựa trên các thành phần UI. Nó được duy trì bởi Meta và một cộng đồng các nhà phát triển và công ty cá nhân. React có thể được sử dụng như một cơ sở để phát triển các ứng dụng trang đơn hoặc di động',
  },
];

const Subjects = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [value, setValue] = useState(0);
  const toast = useSelector(toast$);
  const subjects = useSelector(subjects$);
  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    dispatch(getAllSubjects.getAllSubjectsRequest());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  if (subjects.loading) {
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

  const columns = [
    { field: 'name', headerName: 'Code', minWidth: 100, flex: 1 },
    { field: 'description', headerName: 'Description', minWidth: 250, flex: 1 },
    {
      field: 'industryId',
      headerName: 'Industry',
      minWidth: 180,
      flex: 1,
      valueGetter: (param) => {
        return `${param.value.name}`;
      },
    },
    {
      field: 'user',
      headerName: 'User Created',
      minWidth: 180,
      flex: 1,
      valueGetter: (param) => {
        return `${param.value.fullName}`;
      },
    },
    {
      field: 'createdAt',
      headerName: 'Date Created',
      type: 'date',
      minWidth: 150,
      flex: 1,
      valueGetter: (param) => {
        return `${moment(param.value).format('ll')}`;
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Last Updated',
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
      headerName: 'Actions',
      minWidth: 150,
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ _id }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <>
      <AddModal />
      {user?.role > 1 && (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="tabs"
            >
              <Tab
                icon={<WindowIcon />}
                iconPosition="start"
                label="grid"
                sx={{ minHeight: '50px' }}
              />
              <Tab
                icon={<TocIcon />}
                iconPosition="start"
                label="table"
                disabled={user?.role < 2}
                sx={{ minHeight: '50px' }}
              />
            </Tabs>
          </Box>
        </Box>
      )}
      {value === 0 && <DataCard items={items} />}
      {value === 1 && (
        <DataTable
          component={AddModal}
          toast={toast}
          data={subjects.data}
          columns={columns}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Subjects;
