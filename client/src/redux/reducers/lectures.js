import { INIT_STATE } from './state';
import { getType, getLectures, createLecture, updateLecture, deleteLecture } from '../actions/lectures';

export default function lecturesReducers(state = INIT_STATE.lectures, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getLectures.getLecturesRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getLectures.getLecturesSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getLectures.getLecturesFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(createLecture.createLectureSuccess()):
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };

    case getType(updateLecture.updateLectureSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.map((lecture) => (lecture._id === payload._id ? payload : lecture)),
      };

    case getType(deleteLecture.deleteLectureSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((lecture) => lecture._id !== payload._id),
      };

    default:
      return state;
  }
}
