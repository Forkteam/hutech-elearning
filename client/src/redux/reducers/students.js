import {
  createUser,
  deleteUser,
  getType,
  getUsers,
  updateUser,
} from '../actions/users';
import { INIT_STATE } from './state';

export default function studentsReducers(state = INIT_STATE.students, action) {
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
          .filter((student) =>
            student.id === payload.id && student.role !== payload.role
              ? false
              : true
          )
          .map((student) =>
            student.id === payload.id && student.role === payload.role
              ? payload
              : student
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
