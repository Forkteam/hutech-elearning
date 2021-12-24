import { combineReducers } from 'redux';
import industries from './industries';
import subjects from './subjects';
import lectures from './lectures';
import modal from './constants/modal';
import toast from './constants/toast';
import currentId from './constants/currentId';
import students from './students';
import teachers from './teachers';
import admins from './admins';

export default combineReducers({
  industries,
  subjects,
  lectures,
  modal,
  toast,
  currentId,
  students,
  teachers,
  admins,
});
