import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from '../actions/comments';
import { showToast } from '../actions';

export function* getCommentsSaga(action) {
  try {
    const response = yield call(api.getComments, action.payload);
    yield put(getComments.getCommentsSuccess(response.data.comments));
  } catch (error) {
    console.log(error);
    yield put(getComments.getCommentsFailure(error.response.data));
  }
}

export function* createCommentSaga(action) {
  try {
    const response = yield call(api.createComment, action.payload);
    yield put(createComment.createCommentSuccess(response.data.comment));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(createComment.createCommentFailure(error.response.data));
  }
}

export function* updateCommentSaga(action) {
  try {
    const response = yield call(api.updateComment, action.payload);
    yield put(updateComment.updateCommentSuccess(response.data.comment));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(updateComment.updateCommentFailure(error.response.data));
  }
}

export function* deleteCommentSaga(action) {
  try {
    const response = yield call(api.deleteComment, action.payload);
    yield put(deleteComment.deleteCommentSuccess(response.data.comment));
    yield put(
      showToast({
        message: response.data.message ? response.data.message : 'Server error',
        type: response.data.success ? 'success' : 'error',
      })
    );
  } catch (error) {
    console.log(error);
    yield put(deleteComment.deleteCommentFailure(error.response.data));
  }
}
