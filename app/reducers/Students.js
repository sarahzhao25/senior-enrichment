import axios from 'axios';
import {firstNameChange, lastNameChange, emailChange, gpaChange, selectValueChange} from '../store';

//CONSTANTS FOR ACTION TYPES
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const GOT_STUDENT_FROM_SERVER = 'GET_STUDENT_FROM_SERVER';

//ASYNC OPS END IN A
export function getStudentsFromServerA() {
  return function (dispatch) {
    axios.get('/api/students')
    .then(response => response.data)
    .then(students => dispatch(gotStudentsFromServer(students)))
  }
}

export function postStudentToServerA(body, updateProps, history) {
  return function(dispatch) {
    axios.post('/api/students', body)
    .then(response => response.data)
    .then((newStudent) => {
      dispatch(getStudentsFromServerA());
      dispatch(firstNameChange(''));
      dispatch(lastNameChange(''));
      dispatch(emailChange(''));
      dispatch(gpaChange(''));
      dispatch(selectValueChange(''));
      history.push(`/students/${newStudent.id}`)
    })
  }
}

export function deleteStudentFromServerA(student, props) {
  return (dispatch) => {
    axios.delete(`/api/students/${student.id}`, student)
    .then(() => {
      dispatch(getStudentsFromServerA());
      if (props.location.pathname !== '/students') props.history.push('/students');
    })
    .catch(console.error);
  }
}

export function updateStudentToServerA(body, studentId) {
    return function(dispatch) {
    axios.put(`/api/students/${studentId}`, body)
    .then(response => response.data)
    .then(() => {
      dispatch(getStudentsFromServerA());
      dispatch(firstNameChange(''));
      dispatch(lastNameChange(''));
      dispatch(emailChange(''));
      dispatch(gpaChange(0));
      dispatch(selectValueChange(''));
    })
  }
}

//ACTION CREATORS
function gotStudentsFromServer(students) {
  return {
    type: GOT_STUDENTS_FROM_SERVER,
    students
  }
}

function gotStudentFromServer(student) {
  return {
    type: GOT_STUDENT_FROM_SERVER,
    student
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS_FROM_SERVER:
      return action.students;
    case GOT_STUDENT_FROM_SERVER:
      return [...state, action.student];
    default:
      return state;
  }
}
