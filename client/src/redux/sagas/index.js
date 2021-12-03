import { takeLatest } from 'redux-saga/effects';

import {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../actions/courses';
import {
  getAllCoursesSaga,
  createCourseSaga,
  updateCourseSaga,
  deleteCourseSaga,
} from './courses';

// import {
//   getLectures,
//   createLecture,
//   updateLecture,
//   deleteLecture,
// } from '../actions/lectures';
// import {
//   getLecturesSaga,
//   createLectureSaga,
//   updateLectureSaga,
//   deleteLectureSaga,
// } from './lectures';

import { getUsers, createUser, updateUser, deleteUser } from '../actions/users';
import {
  getUsersSaga,
  createUserSaga,
  updateUserSaga,
  deleteUserSaga,
} from './users';

function* mySaga() {
  yield takeLatest(getAllCourses.getAllCoursesRequest, getAllCoursesSaga);
  yield takeLatest(createCourse.createCourseRequest, createCourseSaga);
  yield takeLatest(updateCourse.updateCourseRequest, updateCourseSaga);
  yield takeLatest(deleteCourse.deleteCourseRequest, deleteCourseSaga);

  // yield takeLatest(getLectures.getLecturesRequest, getLecturesSaga);
  // yield takeLatest(createLecture.createLectureRequest, createLectureSaga);
  // yield takeLatest(updateLecture.updateLectureRequest, updateLectureSaga);
  // yield takeLatest(deleteLecture.deleteLectureRequest, deleteLectureSaga);

  yield takeLatest(getUsers.getUsersRequest, getUsersSaga);
  yield takeLatest(createUser.createUserRequest, createUserSaga);
  yield takeLatest(updateUser.updateUserRequest, updateUserSaga);
  yield takeLatest(deleteUser.deleteUserRequest, deleteUserSaga);
}

export default mySaga;
