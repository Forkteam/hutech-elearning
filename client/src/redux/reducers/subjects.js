import {
  createSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectDetail,
  getType,
  subscribeSubject,
  unsubscribeSubject,
  updateSubject,
  getTeacherSubjects,
  getStudentSubjects,
} from '../actions/subjects';
import { INIT_STATE } from './state';

export default function subjectsReducers(state = INIT_STATE.subjects, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getAllSubjects.getAllSubjectsRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getAllSubjects.getAllSubjectsSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getAllSubjects.getAllSubjectsFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(getTeacherSubjects.getTeacherSubjectsSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getStudentSubjects.getStudentSubjectsSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getSubjectDetail.getSubjectDetailSuccess()):
      return {
        ...state,
        loading: false,
        singleSubject: payload,
      };

    case getType(createSubject.createSubjectSuccess()):
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };

    case getType(subscribeSubject.subscribeSubjectSuccess()):
      return {
        ...state,
        loading: false,
        singleSubject: payload,
      };

    case getType(unsubscribeSubject.unsubscribeSubjectSuccess()):
      return {
        ...state,
        loading: false,
        singleSubject: payload,
      };

    case getType(updateSubject.updateSubjectSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.map((subject) =>
          subject._id === payload._id ? payload : subject
        ),
      };

    case getType(deleteSubject.deleteSubjectSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((subject) => subject._id !== payload._id),
      };

    default:
      return state;
  }
}
