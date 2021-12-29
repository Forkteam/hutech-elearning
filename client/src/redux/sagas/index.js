import { takeLatest } from 'redux-saga/effects';

import {
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
} from '../actions/industries';
import {
  getIndustriesSaga,
  createIndustrySaga,
  updateIndustrySaga,
  deleteIndustrySaga,
} from './industries';

import {
  getAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from '../actions/subjects';
import {
  getAllSubjectsSaga,
  createSubjectSaga,
  updateSubjectSaga,
  deleteSubjectSaga,
} from './subjects';

import {
  getLectures,
  createLecture,
  updateLecture,
  deleteLecture,
} from '../actions/lectures';
import {
  getLecturesSaga,
  createLectureSaga,
  updateLectureSaga,
  deleteLectureSaga,
} from './lectures';

import { getUsers, createUser, updateUser, deleteUser } from '../actions/users';
import {
  getUsersSaga,
  createUserSaga,
  updateUserSaga,
  deleteUserSaga,
} from './users';

function* mySaga() {
  yield takeLatest(getIndustries.getIndustriesRequest, getIndustriesSaga);
  yield takeLatest(createIndustry.createIndustryRequest, createIndustrySaga);
  yield takeLatest(updateIndustry.updateIndustryRequest, updateIndustrySaga);
  yield takeLatest(deleteIndustry.deleteIndustryRequest, deleteIndustrySaga);

  yield takeLatest(getAllSubjects.getAllSubjectsRequest, getAllSubjectsSaga);
  yield takeLatest(createSubject.createSubjectRequest, createSubjectSaga);
  yield takeLatest(updateSubject.updateSubjectRequest, updateSubjectSaga);
  yield takeLatest(deleteSubject.deleteSubjectRequest, deleteSubjectSaga);

  yield takeLatest(getLectures.getLecturesRequest, getLecturesSaga);
  yield takeLatest(createLecture.createLectureRequest, createLectureSaga);
  yield takeLatest(updateLecture.updateLectureRequest, updateLectureSaga);
  yield takeLatest(deleteLecture.deleteLectureRequest, deleteLectureSaga);

  yield takeLatest(getUsers.getUsersRequest, getUsersSaga);
  yield takeLatest(createUser.createUserRequest, createUserSaga);
  yield takeLatest(updateUser.updateUserRequest, updateUserSaga);
  yield takeLatest(deleteUser.deleteUserRequest, deleteUserSaga);
}

export default mySaga;
