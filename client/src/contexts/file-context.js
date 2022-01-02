import axios from 'axios';
import { createContext, useReducer } from 'react';
import { fileReducer } from '../reducers/file-reducer';
import { apiUrl, DISABLED, ENABLED } from '../constants';

export const FileContext = createContext();

const FileContextProvider = ({ children }) => {
  const [fileState, dispatch] = useReducer(fileReducer, {
    isDisabled: false,
  });

  const importExcel = async (formData) => {
    try {
      const response = await axios.post(
        `${apiUrl}/users/import-student`,
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.data) return error.response.data;
      return { success: false, message: error.message };
    }
  };

  const exportExcelTemplate = async () => {
    dispatch({ type: DISABLED });
    try {
      await axios
        .post(`${apiUrl}/users/export-student-template`, 'hello', {
          responseType: 'blob',
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `student-template.xlsx`);
          link.click();
          window.URL.revokeObjectURL(url);
        });
    } catch (error) {
      if (error.response.data) return error.response.data;
      return { success: false, message: error.message };
    }
    dispatch({ type: ENABLED });
  };

  const fileContextData = {
    fileState,
    importExcel,
    exportExcelTemplate,
  };

  return (
    <FileContext.Provider value={fileContextData}>
      {children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
