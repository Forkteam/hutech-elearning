import axios from 'axios';

export const apiURL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:5050' : '';

export const getIndustries = (payload) =>
  axios.get(`${apiURL}/industries`, payload);
export const createIndustry = (payload) =>
  axios.post(`${apiURL}/industries`, payload);
export const updateIndustry = (payload) =>
  axios.put(`${apiURL}/industries/${payload._id}`, payload);
export const deleteIndustry = (payload) =>
  axios.delete(`${apiURL}/industries/${payload}`);

export const getAllSubjects = (payload) =>
  axios.get(`${apiURL}/subjects/all-subjects`, payload);
export const getStudentSubjects = (payload) =>
  axios.get(`${apiURL}/subjects/student-subjects`, payload);
export const getTeacherSubjects = (payload) =>
  axios.get(`${apiURL}/subjects/teacher-subjects`, payload);
export const createSubject = (payload) =>
  axios.post(`${apiURL}/subjects`, payload);
export const updateSubject = (payload) =>
  axios.put(`${apiURL}/subjects/${payload._id}`, payload);
export const deleteSubject = (payload) =>
  axios.delete(`${apiURL}/subjects/${payload}`);

export const getUsers = (payload) => axios.get(`${apiURL}/users/${payload}`);
export const createUser = (payload) =>
  axios.post(`${apiURL}/users/${payload.role}`, payload);
export const updateUser = (payload) =>
  axios.put(`${apiURL}/users/${payload._id}`, payload);
export const deleteUser = (payload) =>
  axios.delete(`${apiURL}/users/${payload}`);
