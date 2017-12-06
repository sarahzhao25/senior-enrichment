/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import students from './Students';
import campuses from './Campuses';
import firstNameChange from './firstNameChange';
import lastNameChange from './lastNameChange';
import emailChange from './emailChange';
import selectValueChange from './selectValueChange';

const rootReducer = combineReducers({
  students,
  campuses,
  firstNameChange,
  lastNameChange,
  emailChange,
  selectValueChange
});

export default rootReducer
