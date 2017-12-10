import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import StudentStateless from './StudentStateless';
import CampusAddStudent from './CampusAddStudent';
import {deleteCampusFromServerA, updateCampusToServerA} from '../store';
import CampusAddForm from './CampusAddForm';
import {RaisedButton} from 'material-ui';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

function CampusSingle(props) {
  let campusId = props.campusId;
  let students = props.students.filter(student => student.campusId === Number(campusId));
  let deleteCampus = props.deleteCampus;
  let campus = props.campuses.find(oneCampus => oneCampus.id === Number(campusId));
  return campus ?
   (
    <div>
    <Card>
      <CardHeader
        title={campus.name}
        subtitle="Campus"
        avatar={campus.imageUrl}
      />
      <CardMedia overlay={<CardTitle title={campus.name} />}>
        <img src={campus.imageUrl} alt="" />
      </CardMedia>
      <CardText>{campus.description}</CardText>
    </Card>
    <RaisedButton disabled = {students.length > 0} onClick={() => deleteCampus(campus)}label="DELETE" default={true} style={{margin: 12}} />
    <CampusAddForm label={'UPDATE'} postOrUpdateCampusA={updateCampusToServerA} campusId={campus.id} campus={campus} />
    <Link to={`/campuses/${campus.id}/addStudent`}><RaisedButton label="ADD STUD" primary={true} style={{margin: 12}} /></Link>
    <Route path="/campuses/:campusId/addStudent" render={() => (<CampusAddStudent campusId={campus.id} />)} />
    <StudentStateless students={students} />
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
