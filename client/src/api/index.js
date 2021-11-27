import axios from 'axios';

export const apiURL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:5050' : '';

export const getAllCourses = (payload) =>
  axios.get(`${apiURL}/courses/all-courses`, payload);
export const getStudentCourses = (payload) =>
  axios.get(`${apiURL}/courses/student-courses`, payload);
export const getTeacherCourses = (payload) =>
  axios.get(`${apiURL}/courses/teacher-courses`, payload);
export const createCourses = (payload) =>
  axios.post(`${apiURL}/courses`, payload);
export const updateCourses = (payload) =>
  axios.put(`${apiURL}/courses/${payload._id}`, payload);
export const deleteCourses = (payload) =>
  axios.delete(`${apiURL}/courses/${payload}`);

export const getUsers = (payload) => axios.get(`${apiURL}/users/${payload}`);
export const createUser = (payload) =>
  axios.post(`${apiURL}/users/${payload.role}`, payload);
export const updateUser = (payload) =>
  axios.put(`${apiURL}/users/${payload._id}`, payload);
export const deleteUser = (payload) =>
  axios.delete(`${apiURL}/users/${payload}`);
