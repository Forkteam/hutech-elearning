import { combineReducers } from 'redux';
import admins from './admins';
import comments from './comments';
import currentId from './constants/currentId';
import modal from './constants/modal';
import toast from './constants/toast';
import industries from './industries';
import lectures from './lectures';
import students from './students';
import subjects from './subjects';

export default combineReducers({
  industries,
  subjects,
  lectures,
  modal,
  toast,
  currentId,
  students,
  admins,
  comments,
});
