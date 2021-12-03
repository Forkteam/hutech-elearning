import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../actions/courses';
import { showToast } from '../actions';

export function* getAllCoursesSaga(action) {
  try {
    const response = yield call(api.getAllCourses, action.payload);
    yield put(getAllCourses.getAllCoursesSuccess(response.data.courses));
  } catch (error) {
    console.log(error);
    yield put(getAllCourses.getAllCoursesFailure(error));
  }
}

export function* createCourseSaga(action) {
  try {
    const response = yield call(api.createCourse, action.payload);
    yield put(createCourse.createCourseSuccess(response.data.course));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'danger',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(createCourse.createCourseFailure(error));
  }
}

export function* updateCourseSaga(action) {
  try {
    const response = yield call(api.updateCourse, action.payload);
    yield put(updateCourse.updateCourseSuccess(response.data.course));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'danger',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(updateCourse.updateCourseFailure(error));
  }
}

export function* deleteCourseSaga(action) {
  try {
    const response = yield call(api.deleteCourse, action.payload);
    yield put(deleteCourse.deleteCourseSuccess(response.data.course));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'danger',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(deleteCourse.deleteCourseFailure(error));
  }
}
