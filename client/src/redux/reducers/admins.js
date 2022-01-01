import {
  createUser,
  deleteUser,
  getType,
  getUsers,
  updateUser,
} from '../actions/users';
import { INIT_STATE } from './state';

export default function adminsReducers(state = INIT_STATE.admins, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getUsers.getUsersRequest()):
      return {
        ...state,
        loading: true,
      };

    case getType(getUsers.getUsersSuccess()):
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case getType(getUsers.getUsersFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(createUser.createUserSuccess()):
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };

    case getType(createUser.createUserFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(updateUser.updateUserSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data
          .filter((user) =>
            user.id === payload.id && user.role !== payload.role ? false : true
          )
          .map((user) =>
            user.id === payload.id && user.role === payload.role
              ? payload
              : user
          ),
      };

    case getType(updateUser.updateUserFailure()):
      return {
        ...state,
        loading: false,
      };

    case getType(deleteUser.deleteUserSuccess()):
      return {
        ...state,
        loading: false,
        data: state.data.filter((post) => post.id !== payload.id),
      };

    case getType(deleteUser.deleteUserFailure()):
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
