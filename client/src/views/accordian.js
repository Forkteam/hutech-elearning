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
    <Typography variant="h1" marginBottom="25px">
    JavaScript Cơ Bản
    </Typography>
    <Typography >
    Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với những bài học và bài tập thực hành hay sau mỗi bài học.
    </Typography>
    <Typography variant="h3" marginTop="25px" marginBottom="25px">
    Bạn sẽ học được gì
    </Typography>
    <Grid container>
      <Grid item xs>
        <Typography><CheckIcon color="secondary" />Hiểu chi tiết về các khái niệm cơ bản trong JS</Typography> 
        <Typography><CheckIcon color="secondary"/>Tự tin khi phỏng vấn với kiến thức vững chắc</Typography>
        <Typography><CheckIcon color="secondary"/>Nắm chắc các tính năng trong phiên bản ES6</Typography> 
        <Typography><CheckIcon color="secondary"/>Ghi nhớ các khái niệm nhờ bài tập trắc nghiệm</Typography>
      </Grid>
      <Grid item xs>
      <Typography><CheckIcon color="secondary"/>Xây dựng được website đầu tiên kết hợp với JS</Typography> 
      <Typography><CheckIcon color="secondary"/>Có nền tảng để học các thư viện và framework JS</Typography> 
      <Typography><CheckIcon color="secondary"/>Thành thạo DOM APIs để tương tác với trang web</Typography> 
      <Typography><CheckIcon color="secondary"/>Nâng cao tư duy với các bài kiểm tra với testcases</Typography> 
      </Grid>
    </Grid>
    <Typography variant="h3" marginTop="25px" marginBottom="25px">
    Nội dung khóa học
    </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1. Giới thiệu</Typography>
        </AccordionSummary>
        <AccordionDetails>
      
        <Accordion>
        <AccordionSummary>
          <Typography>1.1 Giới thiệu tổng quan</Typography>
        </AccordionSummary>
        <AccordionSummary>
          <Typography>1.2 Cài đặt</Typography>
        </AccordionSummary>
      </Accordion>


        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2. Làm quen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        <Accordion>
        <AccordionSummary>
          <Typography>2.1 Giới thiệu tổng quan</Typography>
        </AccordionSummary>
        <AccordionSummary>
          <Typography>2.2 Cài đặt</Typography>
        </AccordionSummary>
        </Accordion>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3. Kiến thức cốt lỗi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          

        
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>4. HTML DOM</Typography>
        </AccordionSummary>
        <AccordionDetails> 
          


        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography>5. ECMAScript 6+</Typography>
        </AccordionSummary>
        <AccordionDetails>
          


        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography>6. Thực hành vận dụng</Typography>
        </AccordionSummary>
        <AccordionDetails>
          


        </AccordionDetails>
      </Accordion>
      

      <Typography variant="h3" marginTop="25px" marginBottom="25px">
      Yêu cầu
      </Typography>
      <Grid container>
        <Grid item xs>
          <Typography><CheckIcon color="secondary"/>Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)</Typography> 
          <Typography><CheckIcon color="secondary"/>Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái khó</Typography>
          <Typography><CheckIcon color="secondary"/>Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học</Typography> 
          <Typography><CheckIcon color="secondary"/>Khi học nếu có khúc mắc hãy tham gia hỏi/đáp tại group FB: Học lập trình web (fullstack.edu.vn)</Typography>
          <Typography marginBottom="100px"><CheckIcon color="secondary"/>Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những gì bạn cần phải biết</Typography>
        </Grid>
      </Grid>
    </div>
  );
}