// import Button from '@mui/material/Button';
import TocIcon from '@mui/icons-material/Toc';
import WindowIcon from '@mui/icons-material/Window';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { showModal } from '../redux/actions';
import AddModal from '../components/subjects/add-modal';

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
  // const dispatch = useDispatch();

  // const setShowModal = useCallback(() => {
  //   dispatch(showModal());
  // }, [dispatch]);
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(items.length / itemsPerPage));
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {/* <Tooltip title="Create new subject">
        <IconButton
          aria-label="add"
          size="large"
          sx={{ width: 'fit-content', alignSelf: 'end' }}
          onClick={setShowModal}
        >
          <AddCircleIcon />
        </IconButton>
      </Tooltip> */}
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
              sx={{ minHeight: '50px' }}
            />
          </Tabs>
        </Box>
      </Box>
      <AddModal />
      {value === 0 && (
        <>
          <Container sx={{ py: 4 }} maxWidth="md">
            <Grid container spacing={2}>
              {items
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((item) => (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
                    <Link to="/login" component={CardActionArea}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: 3,
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            // 16:9
                            pt: '10px',
                          }}
                          height="140"
                          image={item.image}
                          alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h5">
                            {item.title}
                          </Typography>
                          <Typography>
                            {item.description.slice(0, 100)}...
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Container>
          <Box component="span">
            <Pagination
              count={noOfPages}
              page={page}
              onChange={handlePageChange}
              defaultPage={1}
              color="primary"
              variant="outlined"
              showFirstButton
              showLastButton
              sx={{
                left: '50%',
                transform: 'translateX(-50%)',
                position: 'absolute',
              }}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default Subjects;
