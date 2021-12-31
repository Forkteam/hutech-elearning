import { getPublicSubjects, getType } from '../actions/landing';
import { INIT_STATE } from './state';

export default function landingReducers(state = INIT_STATE.landing, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getPublicSubjects.getPublicSubjectsRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getPublicSubjects.getPublicSubjectsSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getPublicSubjects.getPublicSubjectsFailure()):
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
