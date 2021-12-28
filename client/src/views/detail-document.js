import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function DetailForm() {
  return (
    <Box
        position="relative"
        width="83vw"
        height="100vh"
        backgroundColor="rgba(41, 160, 157, 0.2)"

      >
        <Toolbar>
          <Typography
            variant="h3"
            color="violet"
            left="0"
            top="10px"
            bgcolor="rgba(0,0,0,.7)"
            noWrap
            width="100%"
            align="center"
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
          }}
        >
          <Box 
            sx={{
              position: 'absolute',
              width:'60%',
              height: '50%',
              ml: 2,
              mt: 5,
            }}
          >
            <Box sx={{width:'95%',height:'100%'}}>
              <iframe 
                width="100%" 
                height="100%%" 
                src="https://www.youtube.com/embed/zwsPND378OQ?list=PL_-VfJajZj0U9nEXa4qyfB4U5ZIYCMPlz" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </Box>

            <Box
                sx={{
                  height: '75vh',
                  width: '75vw',
                  backgroundColor: 'rgba(26, 204, 61, 0.13)',
                  borderStyle: 'groove',
                  borderRadius: '15px',
                  m:5,
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
              position:'absolute',
              width:'37%',
              height:'50%',
              right:0,
              mr:2,
              fontSize:15,
              fontWeight: 500,
              lineHeight:1.7,
            }}>
              <strong>HTML:</strong>
              <br></br>
              <span >
                HTML là viết tắt của HyperText Markup Language (ngôn ngữ đánh dấu siêu văn bản) dùng mô tả cấu trúc của các trang Web và tạo ra các loại tài liệu có thể xem được trong trình duyệt.
                <br></br>
                HTML là một tiêu chuẩn quốc tế có các thông số kỹ thuật được duy trì bởi World Wide Web Consortium.
                <br/>
                <br/>
              <strong>CSS:</strong>               
               <br/>
                CSS (viết tắt của Cascading Style Sheets) là một ngôn ngữ định dạng được sử dụng để mô tả trình bày các trang Web, bao gồm màu sắc, cách bố trí và phông chữ. Nó cho phép hiển thị nội dung tương thích trên các loại thiết bị có kích thước màn hình khác nhau, chẳng hạn như màn hình lớn, màn hình nhỏ, hoặc máy in.
                <br></br>
                CSS là độc lập với HTML và có thể được sử dụng với bất kỳ ngôn ngữ đánh dấu nào xây dựng dựa trên XML. CSS tuân theo chuẩn chung do W3C quy định.
              </span>
          </Box>
        </Box>
    </Box>
  );
}
