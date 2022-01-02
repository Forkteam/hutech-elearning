export const apiUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5050'
    : 'https://hutech-elearning-nhom2-19dthd4.herokuapp.com';
export const LOCAL_STORAGE_TOKEN_NAME = 'token';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const DISABLED = 'DISABLED';
export const ENABLED = 'ENABLED';
