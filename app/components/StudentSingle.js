import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {updateStudentToServerA} from '../store';
import StudentForm from './StudentForm';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

function StudentSingle(props) {
  let student = props.students.find(stud => Number(stud.id) === Number(props.match.params.studentId));
  return student ? (
    <div>
      <Card>
        <CardHeader
          title={`From ${student.campus.name}`}
          subtitle="Current Student"
          avatar={student.campus.imageUrl}
        />
        <CardMedia overlay={<CardTitle title={student.name} subtitle={student.email} />}>
          <img src="http://www.astropics.com/images/products/1036.jpg" alt="" />
        </CardMedia>
      <CardText>
        This student is cool, I guess. {student.firstName} has a GPA of {student.gpa}, so I guess it's not too bad.
      </CardText>
      <CardActions>
        <Link to={`/students/${student.id}/form`}>
          <i className={'material-icons'}>edit</i>
        </Link>
        <Link to={`/campuses/${student.campusId}`}>
          <i className={'material-icons'}>school</i>
        </Link>
      </CardActions>
    </Card>
      <Route path="/students/:studentId/form" render={() => <StudentForm postOrUpdateA={updateStudentToServerA} student={student} studentId={student.id} />} />
    </div>
  )
  :
  null;
}

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    match: ownProps.match
  }
}

export default connect(mapStateToProps)(StudentSingle)

