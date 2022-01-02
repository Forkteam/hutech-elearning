import {
  createComment,
  deleteComment,
  getComments,
  getType,
  updateComment,
} from '../actions/comments';
import { INIT_STATE } from './state';

export default function commentsReducers(state = INIT_STATE.comments, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getComments.getCommentsRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getComments.getCommentsSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getComments.getCommentsFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(createComment.createCommentSuccess()):
      return {
        ...state,
        loading: false,
        data: [payload, ...state.data],
      };

    case getType(createComment.createCommentFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(updateComment.updateCommentSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data
          .filter((comment) =>
            comment.id === payload.id && comment.role !== payload.role
              ? false
              : true
          )
          .map((comment) =>
            comment.id === payload.id && comment.role === payload.role
              ? payload
              : comment
          ),
      };

    case getType(updateComment.updateCommentFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(deleteComment.deleteCommentSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((post) => post.id !== payload.id),
      };

    case getType(deleteComment.deleteCommentFailure()):
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
