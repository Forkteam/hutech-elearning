import { INIT_STATE } from './state';
import {
  getType,
  getAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from '../actions/subjects';

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
