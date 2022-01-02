import { getType, setCurrentId } from '../../actions';
import { INIT_STATE } from '../state';

export default function toastReducers(state = INIT_STATE.currentId, action) {
  switch (action.type) {
    case getType(setCurrentId()):
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
}
