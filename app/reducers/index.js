/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

const initialState = {students: [], campuses: [], firstNameChange: '', lastNameChange: '', emailChange: ''}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'GOT_STUDENTS_FROM_SERVER':
      return Object.assign({}, state, {students: action.students});
    case 'GOT_CAMPUSES_FROM_SERVER':
      return Object.assign({}, state, {campuses: action.campuses});
    case 'FIRST_NAME_CHANGE':
      return Object.assign({}, state, {firstNameChange: action.firstName});
    case 'LAST_NAME_CHANGE':
      return Object.assign({}, state, {lastNameChange: action.lastName});
    case 'EMAIL_CHANGE':
      return Object.assign({}, state, {emailChange: action.email});
    default: return state
  }
};

export default rootReducer
