import { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useQuery } from '@apollo/client';
import {
  getClasses,
  getClassesOfStudent,
  getClassesOfTeacher,
} from '../graphql/queries';
import { toast$ } from '../redux/selectors';
import { showModal, hideToast } from '../redux/actions';
import { AuthContext } from '../contexts/AuthContext';
// import addIcon from '../assets/plus-circle-fill.svg';
// import AddModal from '../components/class/AddModal';
// import SingleClass from '../components/class/SingleClass';

const Classes = () => {
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);
  const dispatch = useDispatch();
  const location = useLocation();
  const { userId: id } = queryString.parse(location.search);
  const toast = useSelector(toast$);

  const { loading, error, data } = useQuery(getClasses, {
    skip: id !== undefined,
  });

  const {
    loading: loadingId,
    error: errorId,
    data: dataId,
  } = useQuery(
    id !== undefined && role > 1 ? getClassesOfTeacher : getClassesOfStudent,
    {
      variables: { id },
      skip: id === undefined,
    }
  );

  const setShowModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const setHideToast = useCallback(() => {
    dispatch(hideToast());
  }, [dispatch]);

  let body;
  if (loading || loadingId) {
    body = (
      <div className="spinner-container">
        {/* <Spinner animation="border" variant="info" /> */}
      </div>
    );
  } else if (error || errorId) {
    console.log(error.message);
    body = <p>Error!</p>;
  } else if (data !== undefined) {
    body = (
      <tbody>
        {data.classes.map((singleClass) => (
          <tr key={singleClass.id}>
            {/* <SingleClass singleClass={singleClass} /> */}
          </tr>
        ))}
      </tbody>
    );
  } else if (dataId !== undefined && role > 1) {
    body = (
      <tbody>
        {dataId.classesOfTeacher.map((singleClass) => (
          <tr key={singleClass.id}>
            {/* <SingleClass singleClass={singleClass} /> */}
          </tr>
        ))}
      </tbody>
    );
  } else {
    body = (
      <tbody>
        {dataId.classesOfStudent.map((singleClass) => (
          <tr key={singleClass.id}>
            {/* <SingleClass singleClass={singleClass} /> */}
          </tr>
        ))}
      </tbody>
    );
  }

  return <>courses page</>;
};

export default Classes;
