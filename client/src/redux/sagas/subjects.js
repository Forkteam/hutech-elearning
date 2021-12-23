import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import {
  getAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from '../actions/subjects';
import { showToast } from '../actions';

export function* getAllSubjectsSaga(action) {
  try {
    const response = yield call(api.getAllSubjects, action.payload);
    yield put(getAllSubjects.getAllSubjectsSuccess(response.data.subjects));
  } catch (error) {
    console.log(error);
    yield put(getAllSubjects.getAllSubjectsFailure(error));
  }
}

export function* createSubjectSaga(action) {
  try {
    const response = yield call(api.createSubject, action.payload);
    yield put(createSubject.createSubjectSuccess(response.data.subject));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'danger',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(createSubject.createSubjectFailure(error));
  }
}

export function* updateSubjectSaga(action) {
  try {
    const response = yield call(api.updateSubject, action.payload);
    yield put(updateSubject.updateSubjectSuccess(response.data.subject));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'danger',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(updateSubject.updateSubjectFailure(error));
  }
}

export function* deleteSubjectSaga(action) {
  try {
    const response = yield call(api.deleteSubject, action.payload);
    yield put(deleteSubject.deleteSubjectSuccess(response.data.subject));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'danger',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(deleteSubject.deleteSubjectFailure(error));
  }
}
