import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import {
  getLectures,
  createLecture,
  updateLecture,
  deleteLecture,
} from '../actions/lectures';
import { showToast } from '../actions';

export function* getLecturesSaga(action) {
  try {
    const response = yield call(api.getLectures, action.payload);
    yield put(getLectures.getLecturesSuccess(response.data.lectures));
  } catch (error) {
    console.log(error);
    yield put(getLectures.getLecturesFailure(error));
  }
}

export function* createLectureSaga(action) {
  try {
    const response = yield call(api.createLecture, action.payload);
    yield put(createLecture.createLectureSuccess(response.data.lecture));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(createLecture.createLectureFailure(error));
  }
}

export function* updateLectureSaga(action) {
  try {
    const response = yield call(api.updateLecture, action.payload);
    yield put(updateLecture.updateLectureSuccess(response.data.lecture));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(updateLecture.updateLectureFailure(error));
  }
}

export function* deleteLectureSaga(action) {
  try {
    const response = yield call(api.deleteLecture, action.payload);
    yield put(deleteLecture.deleteLectureSuccess(response.data.lecture));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(deleteLecture.deleteLectureFailure(error));
  }
}
