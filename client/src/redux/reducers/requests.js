import {
  createRequest,
  getRequests,
  getType,
  updateRequest,
} from '../actions/requests';
import { INIT_STATE } from './state';

export default function requestsReducers(state = INIT_STATE.requests, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getRequests.getRequestsRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getRequests.getRequestsSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getRequests.getRequestsFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(createRequest.createRequestSuccess()):
      return {
        ...state,
        loading: false,
        data: [payload, ...state.data],
      };

    case getType(createRequest.createRequestFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(updateRequest.updateRequestSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data
          .filter((request) =>
            request.id === payload.id && request.role !== payload.role
              ? false
              : true
          )
          .map((request) =>
            request.id === payload.id && request.role === payload.role
              ? payload
              : request
          ),
      };

    case getType(updateRequest.updateRequestFailure()):
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
