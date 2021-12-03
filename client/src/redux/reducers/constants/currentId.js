import { INIT_STATE } from '../state';
import { getType, setCurrentId } from '../../actions';

export default function toastReducers(state = INIT_STATE.currentId, action) {
  switch (action.type) {
    case getType(setCurrentId()):
      return {
        ...state,
        _id: action.payload,
      };

    default:
      return state;
  }
}
