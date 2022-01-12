import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { hideModal, setCurrentId, showToast } from '../actions';
import { createRequest, getRequests, updateRequest } from '../actions/requests';

export function* getRequestsSaga(action) {
  try {
    const response = yield call(api.getRequests, action.payload);
    yield put(getRequests.getRequestsSuccess(response.data.requests));
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
    yield put(getRequests.getRequestsFailure(error.response.data));
  }
}

export function* createRequestSaga(action) {
  try {
    const response = yield call(api.createRequest, action.payload);
    yield put(setCurrentId(0));
    yield put(createRequest.createRequestSuccess(response.data.request));
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
    yield put(createRequest.createRequestFailure(error.response.data));
  }
}

export function* updateRequestSaga(action) {
  try {
    const response = yield call(api.updateRequest, action.payload);
    yield put(hideModal());
    yield put(setCurrentId(0));
    yield put(updateRequest.updateRequestSuccess(response.data.request));
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
    yield put(updateRequest.updateRequestFailure(error.response.data));
  }
}
