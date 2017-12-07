import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CampusAddForm from './CampusAddForm';
import {deleteCampusFromServerA} from '../store';

function CampusAll(props) {
  let campuses = props.campuses;
  let students = props.students;
  let deleteCampus = props.deleteCampus;
  return (
    <div>
      <h1>ALL CAMPUSES</h1>
      <CampusAddForm />
      <ul>
      {campuses.map(campus => {
        let studentLength = students.filter(student => student.campusId == campus.id).length;
        return (<li key={campus.id}>
                  <Link to={`/campuses/${campus.id}`}>{campus.name}
                  </Link>
                  <button disabled = {studentLength > 0} onClick={() => deleteCampus(campus)}>DELETE Campus :(</button>
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
