import { INIT_STATE } from '../state';
import { getType, hideToast, showToast } from '../../actions';

export default function toastReducers(state = INIT_STATE.toast, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(showToast()):
      return {
        ...state,
        show: true,
        message: payload.message,
        type: payload.type,
      };

    case getType(hideToast()):
      return {
        ...state,
        show: false,
        message: '',
        type: 'success',
      };

    default:
      return state;
  }
}
