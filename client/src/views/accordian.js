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
  width: '95%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function SimpleAccordion() {
  return (
    <div style={{ marginLeft:'5%',width: '90%',marginRight:'5%' }}>
    <Typography variant="h1" marginTop="5%">
    JavaScript Cơ Bản
    </Typography>
    <Typography margin="5%">
    Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với những bài học và bài tập thực hành hay sau mỗi bài học.
    </Typography>
    <Typography variant="h3" >
    Bạn sẽ học được gì
    </Typography>
    <Grid container marginTop="5%">
      <Grid item xs  marginLeft="5%" marginRight="5%">
        <Typography><CheckIcon color="secondary" />Hiểu chi tiết về các khái niệm cơ bản trong JS</Typography> 
        <Typography><CheckIcon color="secondary"/>Tự tin khi phỏng vấn với kiến thức vững chắc</Typography>
        <Typography><CheckIcon color="secondary"/>Nắm chắc các tính năng trong phiên bản ES6</Typography> 
        <Typography><CheckIcon color="secondary"/>Ghi nhớ các khái niệm nhờ bài tập trắc nghiệm</Typography>
      </Grid>
      <Grid item xs marginRight="3%">
      <Typography><CheckIcon color="secondary"/>Xây dựng được website đầu tiên kết hợp với JS</Typography> 
      <Typography><CheckIcon color="secondary"/>Có nền tảng để học các thư viện và framework JS</Typography> 
      <Typography><CheckIcon color="secondary"/>Thành thạo DOM APIs để tương tác với trang web</Typography> 
      <Typography><CheckIcon color="secondary"/>Nâng cao tư duy với các bài kiểm tra với testcases</Typography> 
      </Grid>
    </Grid>
    <Typography variant="h3" marginBottom="5%" marginTop="5%">
    Nội dung khóa học
    </Typography>
    <div style={{ marginLeft:'5%',width: '90%',marginRight:'5%' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography>1. Giới thiệu</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Accordion>
          <Typography>1.1 Giới thiệu tổng quan</Typography>
        </Accordion>
        <Accordion>
          <Typography>1.2 Cài đặt</Typography>
        </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>2. Làm quen</Typography>
        </AccordionSummary>
        <AccordionDetails
        
        >
        <Accordion>
          <Typography>2.1 Giới thiệu tổng quan</Typography>
        </Accordion>
        <Accordion>
          <Typography>2.2 Giới thiệu tổng quan</Typography>
        </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>3. Kiến thức cốt lỗi</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>4. HTML DOM</Typography>
        </AccordionSummary>
        <AccordionDetails> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        > 
          <Typography>5. ECMAScript 6+</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >      
          <Typography>6. Thực hành vận dụng</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      </div>
      <Typography variant="h3" marginTop="5%" marginBottom="5%">
      Yêu cầu
      </Typography>
      <Grid container >
        <Grid item xs marginLeft="5%" marginRight="5%">
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