import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getData = createActions({
  getRequest: undefined,
  getSuccess: (payload) => payload,
  getFailure: (error) => error,
});

export const createData = createActions({
  createRequest: (payload) => payload,
  createSuccess: (payload) => payload,
  createFailure: (error) => error,
});

export const updateData = createActions({
  updateRequest: (payload) => payload,
  updateSuccess: (payload) => payload,
  updateFailure: (error) => error,
});

export const deleteData = createActions({
  deleteRequest: (payload) => payload,
  deleteSuccess: (payload) => payload,
  deleteFailure: (error) => error,
});

export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');
