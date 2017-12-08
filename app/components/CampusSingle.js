import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import StudentStateless from './StudentStateless';
import CampusAddStudent from './CampusAddStudent';
import {deleteCampusFromServerA} from '../store';
import CampusUpdateForm from './CampusUpdateForm';

function CampusSingle(props) {
  let campusId = props.campusId;
  let students = props.students.filter(student => student.campusId == campusId);
  let deleteCampus = props.deleteCampus;
  let campus = props.campuses.find(oneCampus => oneCampus.id == campusId);
  return campus ?
   (
    <div>
      <h1>I'll tell you all about this SINGLE campus!</h1>
      <h2>Name:</h2>
      <h3>{campus.name}</h3>
      <h2>Description: </h2>
      <h3>{campus.description}</h3>
      <img src={campus.imageUrl} alt="Campus Photo" />
      <StudentStateless students={students} />
      <button disabled = {students.length > 0} onClick={() => deleteCampus(campus)}>DELETE Campus :(</button>
      <Link to={`/campuses/${campus.id}/update`}><button>UPDATE this Campus</button></Link>
      <Link to={`/campuses/${campus.id}/addStudent`}><button>ADD student here!</button></Link>
      <Route path="/campuses/:campusId/update" render={() => (<CampusUpdateForm campuses={props.campuses} students={students} campus={campus} />)} />
      <Route path="/campuses/:campusId/addStudent" render={() => (<CampusAddStudent campusId={campus.id} />)} />
    </div>
  )
  :
  null;
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
