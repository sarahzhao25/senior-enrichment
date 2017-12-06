import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function StudentSingle(props) {
  //console.log(props.students, props.match)
  if (props.students.length) {
  let student = props.students.find(student => student.id == props.match.params.studentId);
  return (
    <div>
      <h1>This student, {student.name}, is going to Isengard!</h1>
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
              <td><button>X-KILL!</button></td>
              <td><button>Update?</button></td>
              <td><Link to={`/campuses/${student.campusId}`}><button>This Campus?</button></Link></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    match: ownProps.match
  }
}

export default connect(mapStateToProps)(StudentSingle)

