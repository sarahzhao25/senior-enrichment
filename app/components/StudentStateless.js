import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {deleteStudentFromServerA} from '../store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

function StudentStateless (props) {
  let students = props.students.sort((first, second) => first.id - second.id);
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
          STUDENTS
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Students</TableHeaderColumn>
        <TableHeaderColumn>Campus</TableHeaderColumn>
        <TableHeaderColumn>More Info!</TableHeaderColumn>
        <TableHeaderColumn>Transfer Student?</TableHeaderColumn>
        <TableHeaderColumn>Expel Student?</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {students.map(student => (
      <TableRow key={student.id}>
        <TableRowColumn>{student.id}</TableRowColumn>
        <TableRowColumn>{student.name}</TableRowColumn>
        <TableRowColumn>{student.campus.name}</TableRowColumn>
        <TableHeaderColumn>
          <Link to={`/students/${student.id}`} style={{ textDecoration: 'none' }}>
            <i className={'material-icons'}>person_outline</i>
          </Link>
        </TableHeaderColumn>
        <TableRowColumn>
          <Link to={`/students/${student.id}/form`} style={{ textDecoration: 'none' }}>
            <i className={'material-icons'}>edit</i>
          </Link>
        </TableRowColumn>
        <TableRowColumn>
          <i onClick={() => props.deleteHandler(student)} className={'material-icons'}>delete_forever</i>
        </TableRowColumn>
      </TableRow>
    ))}
    </TableBody>
  </Table>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    students: ownProps.students,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteHandler: (student) => dispatch(deleteStudentFromServerA(student, ownProps))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentStateless));
