import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { showToast } from '../actions';
import {
  createSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectDetail,
  subscribeSubject,
  unsubscribeSubject,
  updateSubject,
  getStudentSubjects,
  getTeacherSubjects,
} from '../actions/subjects';

export function* getAllSubjectsSaga(action) {
  try {
    const response = yield call(api.getAllSubjects, action.payload);
    yield put(getAllSubjects.getAllSubjectsSuccess(response.data.subjects));
  } catch (error) {
    console.log(error);
    yield put(getAllSubjects.getAllSubjectsFailure(error.response.data));
  }
}

export function* getStudentSubjectsSaga(action) {
  try {
    const response = yield call(api.getStudentSubjects, action.payload);
    yield put(
      getStudentSubjects.getStudentSubjectsSuccess(response.data.subjects)
    );
  } catch (error) {
    console.log(error);
    yield put(
      getStudentSubjects.getStudentSubjectsFailure(error.response.data)
    );
  }
}

export function* getTeacherSubjectsSaga(action) {
  try {
    const response = yield call(api.getTeacherSubjects, action.payload);
    yield put(
      getTeacherSubjects.getTeacherSubjectsSuccess(response.data.subjects)
    );
  } catch (error) {
    console.log(error);
    yield put(
      getTeacherSubjects.getTeacherSubjectsFailure(error.response.data)
    );
  }
}

export function* getSubjectDetailSaga(action) {
  try {
    const response = yield call(api.getSubjectDetail, action.payload);
    yield put(getSubjectDetail.getSubjectDetailSuccess(response.data.subject));
  } catch (error) {
    console.log(error);
    yield put(getSubjectDetail.getSubjectDetailFailure(error.response.data));
  }
}

export function* createSubjectSaga(action) {
  try {
    const response = yield call(api.createSubject, action.payload);
    yield put(createSubject.createSubjectSuccess(response.data.subject));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(createSubject.createSubjectFailure(error.response.data));
  }
}

export function* subscribeSubjectSaga(action) {
  try {
    const response = yield call(api.subscribeSubject, action.payload);
    yield put(
      subscribeSubject.subscribeSubjectSuccess(response.data.updatedSubject)
    );
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(subscribeSubject.subscribeSubjectFailure(error.response.data));
  }
}

export function* unsubscribeSubjectSaga(action) {
  try {
    const response = yield call(api.unsubscribeSubject, action.payload);
    yield put(
      unsubscribeSubject.unsubscribeSubjectSuccess(response.data.updatedSubject)
    );
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      unsubscribeSubject.unsubscribeSubjectFailure(error.response.data)
    );
  }
}

export function* updateSubjectSaga(action) {
  try {
    const response = yield call(api.updateSubject, action.payload);
    yield put(updateSubject.updateSubjectSuccess(response.data.subject));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(updateSubject.updateSubjectFailure(error.response.data));
  }
}

export function* deleteSubjectSaga(action) {
  try {
    const response = yield call(api.deleteSubject, action.payload);
    yield put(deleteSubject.deleteSubjectSuccess(response.data.subject));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(deleteSubject.deleteSubjectFailure(error.response.data));
  }
}
