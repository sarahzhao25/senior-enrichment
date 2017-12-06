//CONST FOR ACTION TYPE
const EMAIL_CHANGE = 'EMAIL_CHANGE';

//ACTION CREATOR
export function emailChange (email) {
  return {
    type: EMAIL_CHANGE,
    email
  }
}

export default (state = '', action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return action.email;
    default:
      return state;
  }
}
