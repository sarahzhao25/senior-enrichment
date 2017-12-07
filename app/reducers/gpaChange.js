const GPA_CHANGE = 'GPA_CHANGE';

export function gpaChange(gpa) {
  return {
    type: GPA_CHANGE,
    gpa
  }
}

export default function (state = 0, action) {
  switch (action.type) {
    case GPA_CHANGE:
      return action.gpa;
    default:
      return state;
  }
}
