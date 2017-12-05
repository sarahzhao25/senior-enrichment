import axios from 'axios';

//Action-type constants
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const FIRST_NAME_CHANGE = 'FIRST_NAME_CHANGE';
const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE';
const EMAIL_CHANGE = 'EMAIL_CHANGE';

//Thunk functions - make an async call- has A at the end
export function getStudentsFromServerA() {
  return function (dispatch) {
    axios.get('/api/students')
    .then(response => response.data)
    .then(students => dispatch(gotStudentsFromServer(students)))
  }
}

export function getCampusesFromServerA() {
  return function (dispatch) {
    axios.get('/api/campuses')
    .then(response => response.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)))
  }
}

//Action-creators for the reducer

//useful for AllStudents.js
export function gotStudentsFromServer(students) {
  return {
    type: GOT_STUDENTS_FROM_SERVER,
    students
  }
}

//useful for AllCampuses.js, AddStudentForm.js
export function gotCampusesFromServer(campuses) {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  }
}

//useful for AddStudentForm.js
export function firstNameChange (firstName) {
  return {
    type: FIRST_NAME_CHANGE,
    firstName
  }
}

//useful for AddStudentForm.js
export function lastNameChange (lastName) {
  return {
    type: LAST_NAME_CHANGE,
    lastName
  }
}

//useful for AddStudentForm.js
export function emailChange (email) {
  return {
    type: EMAIL_CHANGE,
    email
  }
}
