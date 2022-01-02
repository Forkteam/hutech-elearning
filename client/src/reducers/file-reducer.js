import { DISABLED, ENABLED } from '../constants';

export const fileReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case DISABLED:
      return {
        ...state,
        isDisabled: true,
      };

    case ENABLED:
      return {
        ...state,
        isDisabled: false,
      };

    default:
      return state;
  }
};
