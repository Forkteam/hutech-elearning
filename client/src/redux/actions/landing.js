import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getPublicSubjects = createActions({
  getPublicSubjectsRequest: (payload) => payload,
  getPublicSubjectsSuccess: (payload) => payload,
  getPublicSubjectsFailure: (error) => error,
});
