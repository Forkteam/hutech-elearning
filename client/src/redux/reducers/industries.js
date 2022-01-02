import {
  createIndustry,
  deleteIndustry,
  getIndustries,
  getType,
  updateIndustry,
} from '../actions/industries';
import { INIT_STATE } from './state';

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

    case getType(createIndustry.createIndustryFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(updateIndustry.updateIndustrySuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.map((industry) =>
          industry.id === payload.id ? payload : industry
        ),
      };

    case getType(updateIndustry.updateIndustryFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(deleteIndustry.deleteIndustrySuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((industry) => industry.id !== payload.id),
      };

    case getType(deleteIndustry.deleteIndustryFailure()):
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
