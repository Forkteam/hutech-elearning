import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getAllCourses = createActions({
  getAllCoursesRequest: (payload) => payload,
  getAllCoursesSuccess: (payload) => payload,
  getAllCoursesFailure: (error) => error,
});

export const createCourse = createActions({
  createCourseRequest: (payload) => payload,
  createCourseSuccess: (payload) => payload,
  createCourseFailure: (error) => error,
});

export const updateCourse = createActions({
  updateCourseRequest: (payload) => payload,
  updateCourseSuccess: (payload) => payload,
  updateCourseFailure: (error) => error,
});

export const deleteCourse = createActions({
  deleteCourseRequest: (payload) => payload,
  deleteCourseSuccess: (payload) => payload,
  deleteCourseFailure: (error) => error,
});
