import { INIT_STATE } from './state';
import {
  getType,
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
} from '../actions/industries';

export default function industriesReducers(
  state = INIT_STATE.industries,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case getType(getIndustries.getIndustriesRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getIndustries.getIndustriesSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getIndustries.getIndustriesFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(createIndustry.createIndustrySuccess()):
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };

    case getType(updateIndustry.updateIndustrySuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.map((industry) =>
          industry._id === payload._id ? payload : industry
        ),
      };

    case getType(deleteIndustry.deleteIndustrySuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((industry) => industry._id !== payload._id),
      };

    default:
      return state;
  }
}
