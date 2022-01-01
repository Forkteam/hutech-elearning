import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { showToast } from '../actions';
import { getPublicSubjects } from '../actions/landing';

export function* getPublicSubjectsSaga(action) {
  try {
    const response = yield call(api.getPublicSubjects, action.payload);
    yield put(
      getPublicSubjects.getPublicSubjectsSuccess(response.data.subjects)
    );
  } catch (error) {
    console.log(error);
    yield put(
      showToast({
        message: error.response.data.message
          ? error.response.data.message
          : 'Server error',
        type: error.response.data.success ? 'error' : 'error',
      })
    );
    yield put(getPublicSubjects.getPublicSubjectsFailure(error.response.data));
  }
}
