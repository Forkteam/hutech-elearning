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
  axios.get(`${apiURL}/subjects/student-subjects/${payload}`, payload);
export const getTeacherSubjects = (payload) =>
  axios.get(`${apiURL}/subjects/teacher-subjects/${payload}`, payload);
export const getSubjectDetail = (payload) =>
  axios.get(`${apiURL}/subjects/${payload}`);
export const createSubject = (payload) =>
  axios.post(`${apiURL}/subjects`, payload);
export const subscribeSubject = (payload) =>
  axios.post(`${apiURL}/subjects/${payload}/add-student`);
export const unsubscribeSubject = (payload) =>
  axios.post(`${apiURL}/subjects/${payload}/remove-student`);
export const updateSubject = (payload) =>
  axios.put(`${apiURL}/subjects/${payload._id}`, payload);
export const deleteSubject = (payload) =>
  axios.delete(`${apiURL}/subjects/${payload}`);

export const getLectures = (payload) =>
  axios.get(`${apiURL}/lectures/${payload}`);
export const getLectureDetail = (payload) =>
  axios.get(`${apiURL}/lectures/lecture/${payload}`);
export const createLecture = (payload) =>
  axios.post(`${apiURL}/lectures`, payload);
export const updateLecture = (payload) =>
  axios.put(`${apiURL}/lectures/${payload._id}`, payload);
export const deleteLecture = (payload) =>
  axios.delete(`${apiURL}/lectures/${payload}`);

export const getUsers = (payload) => axios.get(`${apiURL}/users/${payload}`);
export const createUser = (payload) =>
  axios.post(`${apiURL}/users/${payload.role}`, payload);
export const updateUser = (payload) =>
  axios.put(`${apiURL}/users/${payload._id}`, payload);
export const deleteUser = (payload) =>
  axios.delete(`${apiURL}/users/${payload}`);

export const getComments = (payload) =>
  axios.get(`${apiURL}/comments/${payload}`);
export const createComment = (payload) =>
  axios.post(`${apiURL}/comments`, payload);
export const updateComment = (payload) =>
  axios.put(`${apiURL}/comments/${payload._id}`, payload);
export const deleteComment = (payload) =>
  axios.delete(`${apiURL}/comments/${payload}`);

export const getPublicSubjects = (payload) =>
  axios.get(`${apiURL}/subjects/public-subjects`, payload);
