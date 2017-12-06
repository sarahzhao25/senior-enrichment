//CONST FOR ACTION TYPE
const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE';

//ACTION CREATOR
export function lastNameChange (lastName) {
  return {
    type: LAST_NAME_CHANGE,
    lastName
  }
}

export default (state = '', action) => {
  switch (action.type) {
    case LAST_NAME_CHANGE:
      return action.lastName;
    default:
      return state;
  }
}
