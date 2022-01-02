import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import { apiUrl, LOAD_SUCCESS, LOCAL_STORAGE_TOKEN_NAME } from '../constants';
import { authReducer } from '../reducers/auth-reducer';
import setAuthToken from '../utils/set-auth-token';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);

      try {
        const response = await axios.get(`${apiUrl}/auth`);
        if (response.data.success) {
          dispatch({
            type: LOAD_SUCCESS,
            payload: { isAuthenticated: true, user: response.data.user },
          });
        }
      } catch (error) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        setAuthToken(null);
        dispatch({
          type: LOAD_SUCCESS,
          payload: { isAuthenticated: false, user: null },
        });
        if (error.response.data) return error.response.data;
        else return { success: false, message: error.message };
      }
    } else {
      setAuthToken(null);
      dispatch({
        type: LOAD_SUCCESS,
        payload: { isAuthenticated: false, user: null },
      });
    }
  };
  useEffect(() => loadUser(), []);

  const loginUser = async (loginForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, loginForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const registerUser = async (registerForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/register`,
        registerForm
      );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const verifyUser = async (activateForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/activate`,
        activateForm
      );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    setAuthToken(null);
    dispatch({
      type: LOAD_SUCCESS,
      payload: { isAuthenticated: false, user: null },
    });
  };

  const sendMailResetPassword = async (email) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/send-mail-reset-password`,
        { email }
      );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const resetPassword = async (resetPasswordForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/reset-password`,
        resetPasswordForm
      );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const authContextData = {
    loadUser,
    loginUser,
    registerUser,
    logoutUser,
    authState,
    verifyUser,
    sendMailResetPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
