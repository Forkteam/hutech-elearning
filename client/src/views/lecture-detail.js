/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Typography } from '@mui/material';
import moment from 'moment';
import 'moment/locale/vi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackButton from '../components/layouts/back-button';
import Comments from '../components/lectures/comments';
import Tooltip from '../components/overlays/tooltip';
import { getLectureDetail } from '../redux/actions/lectures';
import { lectures$, toast$ } from '../redux/selectors';
moment.locale('vi');

const LectureDetail = () => {
  const dispatch = useDispatch();
  const { id: lectureId } = useParams();
  const toast = useSelector(toast$);
  const lectures = useSelector(lectures$);

  useEffect(() => {
    dispatch(getLectureDetail.getLectureDetailRequest(lectureId));
  }, [dispatch]);

  if (lectures.loading) {
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

  return (
    <>
      <Tooltip toast={toast} />
      <BackButton />
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          paddingBlockStart: '16px',
          paddingBlockEnd: '20px',
          width: '95%',
          margin: 'auto',
        }}
      >
        <Box sx={{ paddingInlineStart: '20px', paddingInlineEnd: '20px' }}>
          <Typography variant="h5">
            {lectures.singleLecture?.subjectId.name ?? ''} /{' '}
            {lectures.singleLecture?.title ?? ''}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Ngày đăng:{' '}
            {moment(lectures.singleLecture?.createdAt ?? '2001-01-21').format(
              'lll'
            )}{' '}
            - Cập nhật lần cuối{' '}
            {moment(lectures.singleLecture?.updatedAt ?? '2001-01-21').format(
              'lll'
            )}
            <br />
            Người tạo: {lectures.singleLecture?.user.fullName ?? 'Admin'}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {lectures.singleLecture?.description ?? ''}
          </Typography>
        </Box>
        <iframe
          style={{ height: '500px', marginBottom: '50px' }}
          src={lectures.singleLecture?.url ?? ''}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <embed
          src={lectures.singleLecture?.file ?? ''}
          type="application/pdf"
          height="800px"
        />
        <Comments />
      </Box>
    </>
  );
};

export default LectureDetail;
