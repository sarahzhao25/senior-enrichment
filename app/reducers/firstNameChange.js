//CONST FOR ACTION TYPE
const FIRST_NAME_CHANGE = 'FIRST_NAME_CHANGE';

//ACTION CREATOR
export function firstNameChange (firstName) {
  return {
    type: FIRST_NAME_CHANGE,
    firstName
  }
}

export default (state = '', action) => {
  switch (action.type) {
    case FIRST_NAME_CHANGE:
      return action.firstName;
    default:
      return state;
  }
}
