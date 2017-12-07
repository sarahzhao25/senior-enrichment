import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {deleteStudentFromServerA, updateStudentToServerA} from '../store';
import StudentForm from './StudentForm';

function StudentSingle(props) {
  //console.log(props.students, props.match)
  let student = props.students.find(student => student.id == props.match.params.studentId);
  return student ? (
    <div>
      <h1>This SINGLE student, {student.name}, is going to Isengard!</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Campus</th>
            <th>Email Address</th>
            <th>GPA</th>
          </tr>

            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.campus.name}</td>
              <td>{student.email}</td>
              <td>{student.gpa}</td>
              <td><Link to={`/students/${student.id}/form`}><button>UPDATE STUDENT</button></Link></td>
              <td><Link to={`/campuses/${student.campusId}`}><button>TO SINGLE CAMPUS</button></Link></td>
            </tr>
        </tbody>
      </table>
      <Route path="/students/:studentId/form" render={() => <StudentForm postOrUpdateA={updateStudentToServerA} instance={student} />} />
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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteHandler: (student) => dispatch(deleteStudentFromServerA(student, ownProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSingle)

