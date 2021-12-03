import { combineReducers } from 'redux';
import courses from './courses';
import lectures from './lectures';
import modal from './constants/modal';
import toast from './constants/toast';
import currentId from './constants/currentId';
import students from './students';
import teachers from './teachers';
import admins from './admins';

export default combineReducers({
  courses,
  lectures,
  modal,
  toast,
  currentId,
  students,
  teachers,
  admins,
});
