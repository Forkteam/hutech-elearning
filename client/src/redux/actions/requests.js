import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getRequests = createActions({
  getRequestsRequest: (payload) => payload,
  getRequestsSuccess: (payload) => payload,
  getRequestsFailure: (error) => error,
});

export const createRequest = createActions({
  createRequestRequest: (payload) => payload,
  createRequestSuccess: (payload) => payload,
  createRequestFailure: (error) => error,
});

export const updateRequest = createActions({
  updateRequestRequest: (payload) => payload,
  updateRequestSuccess: (payload) => payload,
  updateRequestFailure: (error) => error,
});
