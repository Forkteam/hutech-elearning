import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function SimpleAccordion() {
  return (
    <div>
    <Typography variant="h2" >
    JavaScript Cơ Bản
    </Typography>
    <Typography >
    Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.
    </Typography>
    <Typography variant="h3" >
    Bạn sẽ học được gì
    </Typography>
    <Grid container>
      <Grid item xs>
        <Typography><CheckIcon/>Hiểu chi tiết về các khái niệm cơ bản trong JS</Typography> 
        <Typography><CheckIcon/>Tự tin khi phỏng vấn với kiến thức vững chắc</Typography>
        <Typography><CheckIcon/>Nắm chắc các tính năng trong phiên bản ES6</Typography> 
        <Typography><CheckIcon/>Ghi nhớ các khái niệm nhờ bài tập trắc nghiệm</Typography>
      </Grid>
      <Grid item xs>
      <Typography><CheckIcon/>Xây dựng được website đầu tiên kết hợp với JS</Typography> 
      <Typography><CheckIcon/>Có nền tảng để học các thư viện và framework JS</Typography> 
      <Typography><CheckIcon/>Thành thạo DOM APIs để tương tác với trang web</Typography> 
      <Typography><CheckIcon/>Nâng cao tư duy với các bài kiểm tra với testcases</Typography> 
      </Grid>
    </Grid>
    <Typography variant="h3" >
    Nội dung khóa học
    </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          s
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails> 
        <Typography>
          s
        </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Typography variant="h3" >
      Yêu cầu
      </Typography>
      <Grid container>
        <Grid item xs>
          <Typography><CheckIcon/>Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)</Typography> 
          <Typography><CheckIcon/>Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái khó</Typography>
          <Typography><CheckIcon/>Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học</Typography> 
          <Typography><CheckIcon/>Khi học nếu có khúc mắc hãy tham gia hỏi/đáp tại group FB: Học lập trình web (fullstack.edu.vn)</Typography>
          <Typography><CheckIcon/>Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những gì bạn cần phải biết</Typography>
        </Grid>
      </Grid>
    </div>
  );
}