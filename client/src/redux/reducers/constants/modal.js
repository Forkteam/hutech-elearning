import { INIT_STATE } from '../state';
import { getType, hideModal, showModal } from '../../actions';

export default function modalReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal()):
      return {
        show: true,
      };

    case getType(hideModal()):
      return {
        show: false,
      };

    default:
      return state;
  }
}
