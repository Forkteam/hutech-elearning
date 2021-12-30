import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getComments = createActions({
  getCommentsRequest: (payload) => payload,
  getCommentsSuccess: (payload) => payload,
  getCommentsFailure: (error) => error,
});

export const createComment = createActions({
  createCommentRequest: (payload) => payload,
  createCommentSuccess: (payload) => payload,
  createCommentFailure: (error) => error,
});

export const updateComment = createActions({
  updateCommentRequest: (payload) => payload,
  updateCommentSuccess: (payload) => payload,
  updateCommentFailure: (error) => error,
});

export const deleteComment = createActions({
  deleteCommentRequest: (payload) => payload,
  deleteCommentSuccess: (payload) => payload,
  deleteCommentFailure: (error) => error,
});
