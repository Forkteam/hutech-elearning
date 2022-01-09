import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { hideModal, setCurrentId, showToast } from '../actions';
import {
  createLecture,
  deleteLecture,
  getLectureDetail,
  getLectures,
  updateLecture,
} from '../actions/lectures';

export function* getLecturesSaga(action) {
  try {
    const response = yield call(api.getLectures, action.payload);
    yield put(getLectures.getLecturesSuccess(response.data.lectures));
  } catch (error) {
    console.log(error);
    yield put(
      showToast({
        message: error.response.data.message
          ? error.response.data.message
          : 'Lỗi máy chủ',
        type: error.response.data.success ? 'error' : 'error',
      })
    );
    yield put(getLectures.getLecturesFailure(error.response.data));
  }
}

export function* getLectureDetailSaga(action) {
  try {
    const response = yield call(api.getLectureDetail, action.payload);
    yield put(getLectureDetail.getLectureDetailSuccess(response.data.lecture));
  } catch (error) {
    console.log(error);
    yield put(
      showToast({
        message: error.response.data.message
          ? error.response.data.message
          : 'Lỗi máy chủ',
        type: error.response.data.success ? 'error' : 'error',
      })
    );
    yield put(getLectureDetail.getLectureDetailFailure(error.response.data));
  }
}

export function* createLectureSaga(action) {
  try {
    const response = yield call(api.createLecture, action.payload);
    yield put(hideModal());
    yield put(setCurrentId(0));
    yield put(createLecture.createLectureSuccess(response.data.lecture));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Lỗi máy chủ',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      showToast({
        message: error.response.data.message
          ? error.response.data.message
          : 'Lỗi máy chủ',
        type: error.response.data.success ? 'error' : 'error',
      })
    );
    yield put(createLecture.createLectureFailure(error.response.data));
  }
}

export function* updateLectureSaga(action) {
  try {
    const response = yield call(api.updateLecture, action.payload);
    yield put(hideModal());
    yield put(setCurrentId(0));
    yield put(updateLecture.updateLectureSuccess(response.data.lecture));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Lỗi máy chủ',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      showToast({
        message: error.response.data.message
          ? error.response.data.message
          : 'Lỗi máy chủ',
        type: error.response.data.success ? 'error' : 'error',
      })
    );
    yield put(updateLecture.updateLectureFailure(error.response.data));
  }
}

export function* deleteLectureSaga(action) {
  try {
    const response = yield call(api.deleteLecture, action.payload);
    yield put(hideModal());
    yield put(setCurrentId(0));
    yield put(deleteLecture.deleteLectureSuccess(response.data.lecture));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Lỗi máy chủ',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      showToast({
        message: error.response.data.message
          ? error.response.data.message
          : 'Lỗi máy chủ',
        type: error.response.data.success ? 'error' : 'error',
      })
    );
    yield put(deleteLecture.deleteLectureFailure(error.response.data));
  }
}
