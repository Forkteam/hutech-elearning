import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { showToast, hideModal, setCurrentId } from '../actions';
import {
  createIndustry,
  deleteIndustry,
  getIndustries,
  updateIndustry,
} from '../actions/industries';

export function* getIndustriesSaga(action) {
  try {
    const response = yield call(api.getIndustries, action.payload);
    yield put(getIndustries.getIndustriesSuccess(response.data.industries));
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
    yield put(getIndustries.getIndustriesFailure(error.response.data));
  }
}

export function* createIndustrySaga(action) {
  try {
    const response = yield call(api.createIndustry, action.payload);
    yield put(createIndustry.createIndustrySuccess(response.data.industry));
    yield put(hideModal());
    yield put(setCurrentId(0));
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
    yield put(createIndustry.createIndustryFailure(error.response.data));
  }
}

export function* updateIndustrySaga(action) {
  try {
    const response = yield call(api.updateIndustry, action.payload);
    yield put(updateIndustry.updateIndustrySuccess(response.data.industry));
    yield put(hideModal());
    yield put(setCurrentId(0));
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
    yield put(updateIndustry.updateIndustryFailure(error.response.data));
  }
}

export function* deleteIndustrySaga(action) {
  try {
    const response = yield call(api.deleteIndustry, action.payload);
    yield put(deleteIndustry.deleteIndustrySuccess(response.data.industry));
    yield put(hideModal());
    yield put(setCurrentId(0));
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
    yield put(deleteIndustry.deleteIndustryFailure(error.response.data));
  }
}
