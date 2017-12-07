import axios from 'axios';

//CONSTANTS FOR ACTION TYPES
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_CAMPUS_FROM_SERVER = 'GOT_CAMPUS_FROM_SERVER';

//ASYNC OPS END IN A
export function getCampusesFromServerA() {
  return function (dispatch) {
    axios.get('/api/campuses')
    .then(response => response.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)))
    .catch(console.error)
  }
}

export function postCampusToServerA(campusBody) {
  return function(dispatch) {
    axios.post('/api/campuses', campusBody)
    .then(response => response.data)
    .then(newCampus => dispatch(gotCampusFromServer(newCampus)))
    .catch(console.error)
  }
}

export function deleteCampusFromServerA(campus, history) {
  return function(dispatch) {
    axios.delete(`/api/campuses/${campus.id}`, campus)
    .then(response => response.data)
    .then(() => {
      history.push('/campuses');
      dispatch(getCampusesFromServerA());
    }
    )
    .catch(console.error);
  }
}

export function updateCampusToServerA(updates, campusId) {
  return function(dispatch) {
    axios.put(`/api/campuses/${campusId}`, updates)
    .then(response => response.data)
    .then(() => dispatch(getCampusesFromServerA()))
    .catch(console.error);
  }
}

//ACTION CREATORS
function gotCampusesFromServer(campuses) {
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  }
}

function gotCampusFromServer(campus) {
  return {
    type: GOT_CAMPUS_FROM_SERVER,
    campus
  }
}

// function deletedCampusFromServer(campus) {
//   return {
//     type: DELETED_CAMPUS_FROM_SERVER,
//     campus
//   }
// }

export default (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    case GOT_CAMPUS_FROM_SERVER:
      return [...state, action.campus];
    default:
      return state;
  }
}
