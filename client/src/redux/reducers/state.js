export const INIT_STATE = {
  modal: {
    show: false,
  },
  toast: {
    show: false,
    message: '',
    type: 'success',
  },
  currentId: {
    _id: 0,
  },
  industries: {
    loading: false,
    data: [],
  },
  subjects: {
    loading: false,
    data: [],
    singleSubject: null,
  },
  lectures: {
    loading: false,
    data: [],
    singleLecture: null,
  },
  students: {
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
