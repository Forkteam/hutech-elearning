import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function DetailForm() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Toolbar>
        <Typography
          variant="h3"
          color="violet"
          align="center"
          left="0"
          top="10px"
          bgcolor="rgba(0,0,0,.7)"
          noWrap
          width="100vw"
          sx={{
            position: 'absolute',
            flex: 1,
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          HTML/CSS
        </Typography>
      </Toolbar>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(41, 160, 157, 0.2)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '72%',
            height: '100%',
            ml: 2,
            mb: 50,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            color="black"
            align="center"
            noWrap
            width="100%"
          >
            Giới thiệu về HTML/CSS
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            1. Định nghĩa HTML/CSS
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            ml="3vw"
            fontWeight="400"
          >
            - HTML tạm dịch là ngôn ngữ đánh dấu siêu văn bản. Người ta thường
            sử dụng HTML trong việc phân chia các đoạn văn, heading, links,
            blockquotes,…
            <br />- CSS là chữ viết tắt của Cascading Style Sheets, nó là một
            ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo
            ra bởi các ngôn ngữ đánh dấu (HTML). Nói ngắn gọn hơn là ngôn ngữ
            tạo phong cách cho trang web.
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            2. Ưu và nhược điểm của HTML là gì?
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            ml="3vw"
            fontWeight="bold"
          >
            * Ưu Điểm
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              ml="2vw"
              fontWeight="400"
            >
              - Có nhiều tài nguyên hỗ trợ với cộng đồng người dùng vô cùng lớn{' '}
              <br />- Có thể hoạt động mượt mà trên hầu hết mọi trình duyệt hiện
              nay <br />
              - Học HTML khá đơn giản <br />
              - Các markup sử dụng trong HTML thường ngắn gọn, có độ đồng nhất
              cao <br />
              - Sử dụng mã nguồn mở, hoàn toàn miễn phí <br />
              - HTML là chuẩn web được vận hành bởi W3C <br />- Dễ dàng để tích
              hợp với các loại ngôn ngữ backend (ví dụ như: PHP, Node.js,…)
            </Typography>
            * Nhược Ưu Điểm
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              ml="2vw"
              fontWeight="400"
            >
              - Chỉ được áp dụng chủ yếu cho web tĩnh. Nếu muốn tạo các tính
              năng động, lập trình viên phải dùng thêm JavaScript hoặc ngôn ngữ
              backend của bên thứ 3 (ví dụ như: PHP) <br />
              - Mỗi trang HTML cần được tạo riêng biệt, ngay có khi có nhiều yếu
              tố trùng lặp như header, footer. <br />
              - Khó để kiểm soát cách đọc và hiển thị file HTML của trình duyệt
              (ví dụ, một số trình duyệt cũ không render được tag mới. Do đó, dù
              trong HTML document có sử dụng các tag này thì trình duyệt cũng
              không đọc được). <br />- Một vài trình duyệt còn chậm cập nhật để
              hỗ trợ tính năng mới của HTML
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            3. Các thuật ngữ HTML phổ biến.
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              ml="2vw"
              fontWeight="400"
            >
              <strong>Elements</strong>
              {
                ': Là các chỉ định xác định nội dung, cấu trúc của các đối tượng trong một Website. Tên Element được bao quang, xác định bằng dấu ngoặc < >. Những yếu tố được sử dụng phổ biến là đoạn văn ( <p>), các cấp độ tiêu đề (từ <h1> đến <h6>), danh sách tiếp tục bao gồm <a>, <div>, <span>, <strong>, và <em>,… '
              }
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              ml="2vw"
              fontWeight="400"
            >
              <strong>Tags</strong>
              {
                ': Một Element được bao quanh bởi các dấu ngoặc < > sẽ tạo ra các thẻ. Ví dụ thẻ mở là dấu hiệu cho bạn biết sự bắt đầu của một Element (ví dụ: <div>). Thẻ đóng sẽ đánh dấu vào cuối của một Element, có hình thức là dấu ngặc nhỏ + dấu chéo + dấu ngoặc lớn (ví dụ: </div>). Ở giữa thẻ mở và thẻ đóng là nội dung của Element. '
              }
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              ml="2vw"
              fontWeight="400"
            >
              <strong>Attributes</strong>
              {
                ': Là thuộc tính sử dụng để cung cấp thông tin bổ sung về một Element. Các Attributes bao gồm tên và giá trị, được xác định sau tên của một thành phần và trong thẻ mở. Attributes có định dạng như sau: tên thuộc tính + dấu bằng + giá trị thuộc tính được trích dẫn. Ví dụ Element <a> gồm một Attribute href: <a href=”http://shayhowe.com/”>Shay Howe</a>. Một số thuộc tính mà tôi thường dùng là Attribute Class, ID, SRC, thuộc tính href,…'
              }
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            4. Bố cục chung của HTML.
            <Box
              sx={{
                height: '500px',
                width: '72%',
                backgroundColor: 'rgba(0,38,83,.2)',
                borderStyle: 'groove',
                borderRadius: '15px',
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                ml="2vw"
                fontWeight="400"
              >
                <br />
                {'<!DOCTYPE html>'}
                <br />
                <br />
                {'<html>'}
                <br />
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'<head>'}
                <br />
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'<title> Page Title </title>'}
                <br />
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'</head>'}
                <br />
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'<body>'}
                <br />
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'<h1> The main Heading </h1>'}
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'<h2> A catchy subheading </h2>'}
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'<p> Paragraph </p>'}
                <br />
                <br />
                <span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {'</body>'}
                <br />
                <br />
                {'</html>'}
              </Typography>
            </Box>
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            Trong đó:
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              ml="2vw"
              fontWeight="400"
            >
              <strong>{'- <!DOCTYPE html>'}</strong>
              {': khai báo kiểu dữ liệu hiển thị.'} <br />
              <strong>{'- <html>'}</strong> và <strong>{'</html>'}</strong>
              {
                ': cặp thẻ bắt buộc, element cấp cao nhất, có nhiệm vụ đóng gói tất cả nội dung của trang HTML.'
              }{' '}
              <br />
              <strong>{'- <head>'}</strong> và <strong>{'</head>'}</strong>
              {
                ': khai báo các thông tin meta của trang web như: tiêu đề trang, charset.'
              }{' '}
              <br />
              <strong>{'- <title>'}</strong> và <strong>{'</title>'}</strong>
              {
                ': cặp thẻ nằm bên trong thẻ <head>, dùng để khai báo tiêu đề của trang.'
              }{' '}
              <br />
              <strong>{'- <body>'}</strong> và <strong>{'</body>'}</strong>
              {
                ': cặp thẻ dùng để đóng gói tất cả các nội dung sẽ hiển thị trên trang.'
              }{' '}
              <br />
              <strong>{'- <h1></h1>, <h2></h2>'}</strong>
              {
                ': định dạng dữ liệu dạng heading. Thông thường có 6 cấp độ heading trong HTML, trải dài từ <h1> tới <h6>. Trong đó, <h1> là cấp độ heading cao nhất và <h6> là cấp độ heading thấp nhất.'
              }{' '}
              <br />
              <strong>{'- <p>'}</strong> và <strong>{'</p>'}</strong>
              {': cặp thẻ chứa các đoạn văn bản của trang web.'}
              <br />
              <br />
            </Typography>
          </Typography>

          <Box
            sx={{
              height: '520px',
              width: '100%',
              backgroundColor: 'rgba(26, 204, 61, 0.13)',
              borderStyle: 'groove',
              borderRadius: '15px',
              position: 'relative',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              fontWeight="bold"
              align="center"
              color="darkgoldenrod"
            >
              Comments
            </Typography>

            <Box
              sx={{
                ml: 2,
              }}
            >
              <div class="comment">
                <a href="/" class="avatar">
                  <img
                    width={40}
                    height={40}
                    src="https://recmiennam.com/wp-content/uploads/2020/10/tong-hop-anh-gai-xinh-dep-nhat-tuan-qua-4.jpg "
                    alt="Avatar"
                  ></img>
                </a>
                <div class="content">
                  <a href="/" class="author">
                    Linh
                  </a>
                  <div class="metadata">
                    <span class="date">
                      How artistic! (Today at 5:42 PM) <br />
                      <br />{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a href="/" class="avatar">
                  <img
                    width={40}
                    height={40}
                    src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/132668877_1053006955203013_3878698411271109926_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u69_XG4V2MAAX_taf22&_nc_ht=scontent-sin6-1.xx&oh=00_AT9ENCtIDFOdKctmtcTtpWHX_vp-9yyOqhJM8iUNX-qrFw&oe=61E7781E "
                    alt="Avatar"
                  ></img>
                </a>
                <div class="content">
                  <a href="/" class="author">
                    Dương An
                  </a>
                  <div class="metadata">
                    <span>
                      This has been very useful for my research. Thanks as well!
                      (Yesterday at 12:30 AM) <br />
                      <br />{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div class="comments">
                <a href="/" class="avatar">
                  <img
                    width={40}
                    height={40}
                    src="https://anhdep123.com/wp-content/uploads/2021/02/hinh-nen-gai-xinh-full-hd-cho-dien-thoai.jpg"
                    alt="Avatar"
                  ></img>
                </a>
                <div class="content">
                  <a href="/" class="author">
                    Jenny Hess
                  </a>
                  <div class="metadata">
                    <span class="date">
                      {' '}
                      Elliot you are always so right :) (2 days ago) <br />
                      <br />{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a href="/" class="avatar">
                  <img
                    width={40}
                    height={40}
                    src="https://nghethuat365.com/wp-content/uploads/2021/06/Gai-xxinh-nguc-khung.jpg"
                    alt="Avatar"
                  ></img>
                </a>
                <div class="content">
                  <a href="/" class="author">
                    Joe Henderson
                  </a>
                  <div class="metadata">
                    <span class="date">
                      {' '}
                      Dude, this is awesome. Thanks so much (5 days ago) <br />
                      <br />{' '}
                    </span>
                  </div>
                </div>
              </div>
              <form class="ui reply form">
                <Box
                  class="field"
                  sx={{
                    position: 'absolute',
                    bottom: '2%',
                  }}
                >
                  <textarea></textarea>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      ml: 2,
                      bottom: 15,
                      width: 20,
                      height: 20,
                      borderRadius: 15,
                    }}
                  >
                    Post
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            width: '26%',
            height: '100%',
            right: 0,
          }}
        >
          <List
            sx={{
              width: '22vw',
              maxWidth: 360,
              bgcolor: 'rgba(0,0,0,.15)',
              position: 'fixed',
              right: 0,
              top: '10vh',
              borderStyle: 'groove',
            }}
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                align="center" //position='absolute'
                sx={{
                  fontSize: '30px',
                  color: 'blue',
                  bgcolor: 'rgba(0,77,245,.2)',
                }}
              >
                Mục Lục
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemText primary="1. Giới thiệu HTML/CSS" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="2. Ưu và nhược điểm HTML/CSS là gì?" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="3. Các thuật ngữ HTML phổ biến" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto">
              <List>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary=" - Elements" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary=" - Tags" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary=" - Attributes" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemText primary="4. Bố cục chung của HTML" />
            </ListItemButton>
          </List>
          {/* <Button href="https://www.youtube.com/playlist?list=PL_-VfJajZj0U9nEXa4qyfB4U5ZIYCMPlz" variant="contained" size="medium"
            sx={{
              position: 'fixed',
              bottom:20,
              right:10
            }}
            >Xem bài giảng
          </Button>  */}
          <Button
            href="https://youtu.be/PaBkXQhxwto"
            variant="contained"
            size="medium"
            sx={{
              position: 'fixed',
              bottom: 20,
              right: 10,
            }}
          >
            Xem bài giảng
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
