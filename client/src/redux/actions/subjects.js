import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getAllSubjects = createActions({
  getAllSubjectsRequest: (payload) => payload,
  getAllSubjectsSuccess: (payload) => payload,
  getAllSubjectsFailure: (error) => error,
});

export const createSubject = createActions({
  createSubjectRequest: (payload) => payload,
  createSubjectSuccess: (payload) => payload,
  createSubjectFailure: (error) => error,
});

export const updateSubject = createActions({
  updateSubjectRequest: (payload) => payload,
  updateSubjectSuccess: (payload) => payload,
  updateSubjectFailure: (error) => error,
});

export const deleteSubject = createActions({
  deleteSubjectRequest: (payload) => payload,
  deleteSubjectSuccess: (payload) => payload,
  deleteSubjectFailure: (error) => error,
});
