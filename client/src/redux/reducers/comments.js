import { INIT_STATE } from './state';
import {
  getType,
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from '../actions/comments';

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
        success: true,
        message: '',
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
        data: [...state.data, payload],
        success: true,
        message: '',
      };

    case getType(createComment.createCommentFailure()):
      return {
        ...state,
        loading: false,
        success: payload.success,
        message: payload.message,
      };

    case getType(updateComment.updateCommentSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data
          .filter((comment) =>
            comment._id === payload._id && comment.role !== payload.role
              ? false
              : true
          )
          .map((comment) =>
            comment._id === payload._id && comment.role === payload.role
              ? payload
              : comment
          ),
        success: true,
        message: '',
      };

    case getType(updateComment.updateCommentFailure()):
      return {
        ...state,
        loading: false,
        success: payload.success,
        message: payload.message,
      };

    case getType(deleteComment.deleteCommentSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((post) => post._id !== payload._id),
        success: true,
        message: '',
      };

    case getType(deleteComment.deleteCommentFailure()):
      return {
        ...state,
        loading: false,
        success: payload.success,
        message: payload.message,
      };

    default:
      return state;
  }
}
