import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getUsers = createActions({
  getUsersRequest: (payload) => payload,
  getUsersSuccess: (payload) => payload,
  getUsersFailure: (error) => error,
});

export const createUser = createActions({
  createUserRequest: (payload) => payload,
  createUserSuccess: (payload) => payload,
  createUserFailure: (error) => error,
});

export const updateUser = createActions({
  updateUserRequest: (payload) => payload,
  updateUserSuccess: (payload) => payload,
  updateUserFailure: (error) => error,
});

export const deleteUser = createActions({
  deleteUserRequest: (payload) => payload,
  deleteUserSuccess: (payload) => payload,
  deleteUserFailure: (error) => error,
});
