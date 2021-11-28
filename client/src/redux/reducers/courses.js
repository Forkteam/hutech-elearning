import { INIT_STATE } from './state';
import {
  getType,
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../actions/courses';

export default function coursesReducers(state = INIT_STATE.courses, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getAllCourses.getAllCoursesRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getAllCourses.getAllCoursesSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getAllCourses.getAllCoursesFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(createCourse.createCourseSuccess()):
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };

    case getType(updateCourse.updateCourseSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.map((course) =>
          course._id === payload._id ? payload : course
        ),
      };

    case getType(deleteCourse.deleteCourseSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((course) => course._id !== payload._id),
      };

    default:
      return state;
  }
}
