import {
  createLecture,
  deleteLecture,
  getLectureDetail,
  getLectures,
  getType,
  updateLecture,
} from '../actions/lectures';
import { INIT_STATE } from './state';

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

    case getType(getLectureDetail.getLectureDetailSuccess()):
      return {
        ...state,
        oading: false,
        singleLecture: payload,
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
        data: state.data.map((lecture) =>
          lecture.id === payload.id ? payload : lecture
        ),
      };

    case getType(deleteLecture.deleteLectureSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((lecture) => lecture.id !== payload.id),
      };

    default:
      return state;
  }
}
