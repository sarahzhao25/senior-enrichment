import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CampusAddForm from './CampusAddForm';
import {deleteCampusFromServerA} from '../store';

function CampusAll(props) {
  let campuses = props.campuses;
  let students = props.students;
  let deleteCampus = props.deleteCampus;
  console.log(deleteCampus)
  return (
    <div>
      <h1>These are the campuses!!!!</h1>
      <CampusAddForm />
      <ul>
      {campuses.map(campus => {
        let studentLength = students.filter(student => student.campusId == campus.id).length;
        return (<li key={campus.id}>
                  <Link to={`/campuses/${campus.id}`}>{campus.name}
                  </Link>
                  <button disabled = {studentLength > 0} onClick={() => deleteCampus(campus)}>Delete Campus :(</button>
                </li>)
      }
      )}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteCampus: function(campus) {dispatch(deleteCampusFromServerA(campus, ownProps.history))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAll);
