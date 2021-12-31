import {
  createSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectDetail,
  getType,
  updateSubject,
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
