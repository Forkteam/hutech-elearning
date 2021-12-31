import { takeLatest } from 'redux-saga/effects';
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from '../actions/comments';
import {
  createIndustry,
  deleteIndustry,
  getIndustries,
  updateIndustry,
} from '../actions/industries';
import {
  createLecture,
  deleteLecture,
  getLectureDetail,
  getLectures,
  updateLecture,
} from '../actions/lectures';
import {
  createSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectDetail,
  updateSubject,
} from '../actions/subjects';
import { createUser, deleteUser, getUsers, updateUser } from '../actions/users';
import {
  createCommentSaga,
  deleteCommentSaga,
  getCommentsSaga,
  updateCommentSaga,
} from './comments';
import {
  createIndustrySaga,
  deleteIndustrySaga,
  getIndustriesSaga,
  updateIndustrySaga,
} from './industries';
import {
  createLectureSaga,
  deleteLectureSaga,
  getLectureDetailSaga,
  getLecturesSaga,
  updateLectureSaga,
} from './lectures';
import {
  createSubjectSaga,
  deleteSubjectSaga,
  getAllSubjectsSaga,
  getSubjectDetailSaga,
  updateSubjectSaga,
} from './subjects';
import {
  createUserSaga,
  deleteUserSaga,
  getUsersSaga,
  updateUserSaga,
} from './users';

function* mySaga() {
  yield takeLatest(getIndustries.getIndustriesRequest, getIndustriesSaga);
  yield takeLatest(createIndustry.createIndustryRequest, createIndustrySaga);
  yield takeLatest(updateIndustry.updateIndustryRequest, updateIndustrySaga);
  yield takeLatest(deleteIndustry.deleteIndustryRequest, deleteIndustrySaga);

  yield takeLatest(getAllSubjects.getAllSubjectsRequest, getAllSubjectsSaga);
  yield takeLatest(
    getSubjectDetail.getSubjectDetailRequest,
    getSubjectDetailSaga
  );
  yield takeLatest(createSubject.createSubjectRequest, createSubjectSaga);
  yield takeLatest(updateSubject.updateSubjectRequest, updateSubjectSaga);
  yield takeLatest(deleteSubject.deleteSubjectRequest, deleteSubjectSaga);

  yield takeLatest(getLectures.getLecturesRequest, getLecturesSaga);
  yield takeLatest(
    getLectureDetail.getLectureDetailRequest,
    getLectureDetailSaga
  );
  yield takeLatest(createLecture.createLectureRequest, createLectureSaga);
  yield takeLatest(updateLecture.updateLectureRequest, updateLectureSaga);
  yield takeLatest(deleteLecture.deleteLectureRequest, deleteLectureSaga);

  yield takeLatest(getUsers.getUsersRequest, getUsersSaga);
  yield takeLatest(createUser.createUserRequest, createUserSaga);
  yield takeLatest(updateUser.updateUserRequest, updateUserSaga);
  yield takeLatest(deleteUser.deleteUserRequest, deleteUserSaga);

  yield takeLatest(getComments.getCommentsRequest, getCommentsSaga);
  yield takeLatest(createComment.createCommentRequest, createCommentSaga);
  yield takeLatest(updateComment.updateCommentRequest, updateCommentSaga);
  yield takeLatest(deleteComment.deleteCommentRequest, deleteCommentSaga);
}

export default mySaga;
