const SELECT_VALUE_CHANGE = 'SELECT_VALUE_CHANGE';

export function selectValueChange(selectValue) {
  return {
    type: SELECT_VALUE_CHANGE,
    selectValue
  }
}

export default (state = '', action) => {
  switch (action.type) {
    case SELECT_VALUE_CHANGE:
      return action.selectValue;
    default:
      return state;
  }
}
