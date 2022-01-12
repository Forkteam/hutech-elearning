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
import { getPublicSubjects } from '../actions/landing';
import {
  createLecture,
  deleteLecture,
  getLectureDetail,
  getLectures,
  updateLecture,
} from '../actions/lectures';
import { createRequest, getRequests, updateRequest } from '../actions/requests';
import {
  createSubject,
  deleteSubject,
  getAllPublicSubjects,
  getAllSubjects,
  getStudentSubjects,
  getSubjectDetail,
  getTeacherSubjects,
  subscribeSubject,
  unsubscribeSubject,
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
import { getPublicSubjectsSaga } from './landing';
import {
  createLectureSaga,
  deleteLectureSaga,
  getLectureDetailSaga,
  getLecturesSaga,
  updateLectureSaga,
} from './lectures';
import {
  createRequestSaga,
  getRequestsSaga,
  updateRequestSaga,
} from './requests';
import {
  createSubjectSaga,
  deleteSubjectSaga,
  getAllPublicSubjectsSaga,
  getAllSubjectsSaga,
  getStudentSubjectsSaga,
  getSubjectDetailSaga,
  getTeacherSubjectsSaga,
  subscribeSubjectSaga,
  unsubscribeSubjectSaga,
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
    getAllPublicSubjects.getAllPublicSubjectsRequest,
    getAllPublicSubjectsSaga
  );
  yield takeLatest(
    getStudentSubjects.getStudentSubjectsRequest,
    getStudentSubjectsSaga
  );
  yield takeLatest(
    getTeacherSubjects.getTeacherSubjectsRequest,
    getTeacherSubjectsSaga
  );
  yield takeLatest(
    getSubjectDetail.getSubjectDetailRequest,
    getSubjectDetailSaga
  );
  yield takeLatest(createSubject.createSubjectRequest, createSubjectSaga);
  yield takeLatest(
    subscribeSubject.subscribeSubjectRequest,
    subscribeSubjectSaga
  );
  yield takeLatest(
    unsubscribeSubject.unsubscribeSubjectRequest,
    unsubscribeSubjectSaga
  );
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

  yield takeLatest(
    getPublicSubjects.getPublicSubjectsRequest,
    getPublicSubjectsSaga
  );

  yield takeLatest(getRequests.getRequestsRequest, getRequestsSaga);
  yield takeLatest(createRequest.createRequestRequest, createRequestSaga);
  yield takeLatest(updateRequest.updateRequestRequest, updateRequestSaga);
}

export default mySaga;
