import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getAllSubjects = createActions({
  getAllSubjectsRequest: (payload) => payload,
  getAllSubjectsSuccess: (payload) => payload,
  getAllSubjectsFailure: (error) => error,
});

export const getAllPublicSubjects = createActions({
  getAllPublicSubjectsRequest: (payload) => payload,
  getAllPublicSubjectsSuccess: (payload) => payload,
  getAllPublicSubjectsFailure: (error) => error,
});

export const getStudentSubjects = createActions({
  getStudentSubjectsRequest: (payload) => payload,
  getStudentSubjectsSuccess: (payload) => payload,
  getStudentSubjectsFailure: (error) => error,
});

export const getTeacherSubjects = createActions({
  getTeacherSubjectsRequest: (payload) => payload,
  getTeacherSubjectsSuccess: (payload) => payload,
  getTeacherSubjectsFailure: (error) => error,
});

export const getSubjectDetail = createActions({
  getSubjectDetailRequest: (payload) => payload,
  getSubjectDetailSuccess: (payload) => payload,
  getSubjectDetailFailure: (error) => error,
});

export const createSubject = createActions({
  createSubjectRequest: (payload) => payload,
  createSubjectSuccess: (payload) => payload,
  createSubjectFailure: (error) => error,
});

export const subscribeSubject = createActions({
  subscribeSubjectRequest: (payload) => payload,
  subscribeSubjectSuccess: (payload) => payload,
  subscribeSubjectFailure: (error) => error,
});

export const unsubscribeSubject = createActions({
  unsubscribeSubjectRequest: (payload) => payload,
  unsubscribeSubjectSuccess: (payload) => payload,
  unsubscribeSubjectFailure: (error) => error,
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
