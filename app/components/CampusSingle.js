import React from 'react';
import {connect} from 'react-redux';
import StudentStateless from './StudentStateless';
import {deleteCampusFromServerA} from '../store';

function CampusSingle(props) {
  let campusId = props.campusId;
  let students = props.students.filter(student => student.campusId == campusId);
  let deleteCampus = props.deleteCampus;
  let campus = props.campuses.find(oneCampus => oneCampus.id == campusId);
  return (
    <div>
      <h1>I'll tell you all about this campus!</h1>
      <h2>Name: {campus.name}</h2>
      <h3>Description: {campus.description}</h3>
      <img src={campus.imageUrl} alt="Campus Photo" />
      <StudentStateless students={students} />
      <button disabled = {students.length > 0} onClick={() => deleteCampus(campus)}>Delete Campus :(</button>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    campuses: state.campuses,
    campusId: ownProps.match.params.campusId
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteCampus: function(campus) {dispatch(deleteCampusFromServerA(campus, ownProps.history))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusSingle);
