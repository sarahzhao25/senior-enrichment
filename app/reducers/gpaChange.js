const GPA_CHANGE = 'GPA_CHANGE';

export function gpaChange(gpa) {
  return {
    type: GPA_CHANGE,
    gpa
  }
}

export default function (state = '', action) {
  switch (action.type) {
    case GPA_CHANGE:
      return action.gpa;
    default:
      return state;
  }
}
