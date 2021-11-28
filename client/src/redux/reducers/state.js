export const INIT_STATE = {
  modal: {
    show: false,
  },
  toast: {
    show: false,
    message: '',
    type: null,
  },
  currentId: {
    _id: 0,
  },
  courses: {
    loading: false,
    data: [],
  },
  lectures: {
    loading: false,
    data: [],
  },
  students: {
    loading: false,
    data: [],
    success: true,
    message: '',
  },
  teachers: {
    loading: false,
    data: [],
    success: true,
    message: '',
  },
  admins: {
    loading: false,
    data: [],
    success: true,
    message: '',
  },
};
