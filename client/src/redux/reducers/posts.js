import { INIT_STATE } from '../constants';
import {
  getData,
  getType,
  createData,
  updateData,
  deleteData,
} from '../actions';

export default function reduxReducers(state = INIT_STATE.datas, action) {
  switch (action.type) {
    case getType(getData.getRequest()):
      return {
        ...state,
        isLoading: true,
      };

    case getType(getData.getSuccess()):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case getType(getData.getFailure()):
      return {
        ...state,
        isLoading: false,
      };

    case getType(createData.createSuccess()):
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };

    case getType(updateData.updateSuccess()):
      return {
        ...state,
        isLoading: false,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case getType(deleteData.deleteSuccess()):
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((post) => post._id !== action.payload._id),
      };

    default:
      return state;
  }
}
