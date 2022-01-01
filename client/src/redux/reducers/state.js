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
    id: 0,
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
  },
  admins: {
    loading: false,
    data: [],
  },
  comments: {
    loading: false,
    data: [],
  },
  landing: {
    loading: false,
    data: [],
  },
};
