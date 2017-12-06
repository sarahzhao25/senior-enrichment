import axios from 'axios';
import {firstNameChange, lastNameChange, emailChange} from '../store';

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

export function studentSubmitHandlerA() {
  return function(dispatch) {
    axios.post('/api/students', {})
    .then(response => response.data)
    .then(newStudent => {
      dispatch(gotStudentFromServer(newStudent));
      dispatch(firstNameChange(''));
      dispatch(lastNameChange(''));
      dispatch(emailChange(''));
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
