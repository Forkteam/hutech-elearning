import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchSaga(action) {
  try {
    const posts = yield call(api.fetch);
    yield put(actions.getData.getSuccess(posts.data.posts));
  } catch (error) {
    console.error(error);
    yield put(actions.getData.getFailure(error));
  }
}

function* createSaga(action) {
  try {
    const post = yield call(api.create, action.payload);
    yield put(actions.createData.createSuccess(post.data.post));
  } catch (error) {
    console.error(error);
    yield put(actions.createData.createFailure(error));
  }
}

function* updateSaga(action) {
  try {
    const post = yield call(api.update, action.payload);
    yield put(actions.updateData.updateSuccess(post.data.post));
  } catch (error) {
    console.error(error);
    yield put(actions.updateData.updateFailure(error));
  }
}

function* deleteSaga(action) {
  try {
    const post = yield call(api.delete, action.payload);
    yield put(actions.deleteData.deleteSuccess(post.data.post));
  } catch (error) {
    console.error(error);
    yield put(actions.deleteData.deleteFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getData.getRequest, fetchSaga);
  yield takeLatest(actions.createData.createRequest, createSaga);
  yield takeLatest(actions.updateData.updateRequest, updateSaga);
  yield takeLatest(actions.deleteData.deleteRequest, deleteSaga);
}

export default mySaga;
