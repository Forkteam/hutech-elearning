import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getAllAdmins = createActions({
  getAllAdminsRequest: (payload) => payload,
  getAllAdminsSuccess: (payload) => payload,
  getAllAdminsFailure: (error) => error,
});

export const createAdmin = createActions({
  createAdminRequest: (payload) => payload,
  createAdminSuccess: (payload) => payload,
  createAdminFailure: (error) => error,
});

export const updateAdmin = createActions({
  updateAdminRequest: (payload) => payload,
  updateAdminSuccess: (payload) => payload,
  updateAdminFailure: (error) => error,
});

export const deleteAdmin = createActions({
  deleteAdminRequest: (payload) => payload,
  deleteAdminSuccess: (payload) => payload,
  deleteAdminFailure: (error) => error,
});
