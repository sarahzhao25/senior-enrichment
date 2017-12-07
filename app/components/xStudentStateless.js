import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {deleteStudentFromServerA} from '../store';

function StudentStateless (props) {
  let students = props.students;
  return (
    <table>
      <tbody>
        <tr>
          <th>Students</th>
          <th>Campus</th>
        </tr>

        {students.map(student => (
          <tr key={student.id}>
            <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
            <td>{student.campus.name}</td>
            <td><button onClick={() => props.deleteHandler(student)}>DELETE STUDENT ENTIRELY</button></td>
            <td><Link to={`/students/${student.id}/form`}><button>SWAP STUDENT'S CAMPUS</button></Link></td>
          </tr>
          ))}
      </tbody>
    </table>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    students: ownProps.students,
    selectValueChange: state.selectValueChange
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteHandler: (student) => dispatch(deleteStudentFromServerA(student, ownProps))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentStateless));
