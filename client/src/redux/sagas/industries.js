import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import {
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
} from '../actions/industries';
import { showToast } from '../actions';

export function* getIndustriesSaga(action) {
  try {
    const response = yield call(api.getIndustries, action.payload);
    yield put(getIndustries.getIndustriesSuccess(response.data.industries));
  } catch (error) {
    console.log(error);
    yield put(getIndustries.getIndustriesFailure(error));
  }
}

export function* createIndustrySaga(action) {
  try {
    const response = yield call(api.createIndustry, action.payload);
    yield put(createIndustry.createIndustrySuccess(response.data.industry));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(createIndustry.createIndustryFailure(error));
  }
}

export function* updateIndustrySaga(action) {
  try {
    const response = yield call(api.updateIndustry, action.payload);
    yield put(updateIndustry.updateIndustrySuccess(response.data.industry));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(updateIndustry.updateIndustryFailure(error));
  }
}

export function* deleteIndustrySaga(action) {
  try {
    const response = yield call(api.deleteIndustry, action.payload);
    yield put(deleteIndustry.deleteIndustrySuccess(response.data.industry));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(deleteIndustry.deleteIndustryFailure(error));
  }
}
