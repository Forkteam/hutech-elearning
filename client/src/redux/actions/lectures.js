import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getLectures = createActions({
  getLecturesRequest: (payload) => payload,
  getLecturesSuccess: (payload) => payload,
  getLecturesFailure: (error) => error,
});

export const getLectureDetail = createActions({
  getLectureDetailRequest: (payload) => payload,
  getLectureDetailSuccess: (payload) => payload,
  getLectureDetailFailure: (error) => error,
});

export const createLecture = createActions({
  createLectureRequest: (payload) => payload,
  createLectureSuccess: (payload) => payload,
  createLectureFailure: (error) => error,
});

export const updateLecture = createActions({
  updateLectureRequest: (payload) => payload,
  updateLectureSuccess: (payload) => payload,
  updateLectureFailure: (error) => error,
});

export const deleteLecture = createActions({
  deleteLectureRequest: (payload) => payload,
  deleteLectureSuccess: (payload) => payload,
  deleteLectureFailure: (error) => error,
});
