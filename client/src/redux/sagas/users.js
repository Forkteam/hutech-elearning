import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import { hideModal, setCurrentId, showToast } from '../actions';
import { createUser, deleteUser, getUsers, updateUser } from '../actions/users';

export function* getUsersSaga(action) {
  try {
    const response = yield call(api.getUsers, action.payload);
    yield put(getUsers.getUsersSuccess(response.data.users));
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
    yield put(getUsers.getUsersFailure(error.response.data));
  }
}

export function* createUserSaga(action) {
  try {
    const response = yield call(api.createUser, action.payload);
    yield put(createUser.createUserSuccess(response.data.user));
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
    yield put(createUser.createUserFailure(error.response.data));
  }
}

export function* updateUserSaga(action) {
  try {
    const response = yield call(api.updateUser, action.payload);
    yield put(updateUser.updateUserSuccess(response.data.user));
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
    yield put(updateUser.updateUserFailure(error.response.data));
  }
}

export function* deleteUserSaga(action) {
  try {
    const response = yield call(api.deleteUser, action.payload);
    yield put(deleteUser.deleteUserSuccess(response.data.user));
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
    yield put(deleteUser.deleteUserFailure(error.response.data));
  }
}
