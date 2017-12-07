import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {deleteStudentFromServerA} from '../store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton'

function StudentStateless (props) {
  let students = props.students;
  return (
    <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
          ALL STUDENTS
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Students</TableHeaderColumn>
        <TableHeaderColumn>Campus</TableHeaderColumn>
        <TableHeaderColumn>Delete Student?</TableHeaderColumn>
        <TableHeaderColumn>Swap His/Her Campus?</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}>
    {students.map(student => (
      <TableRow key={student.id}>
        <TableRowColumn>{student.id}</TableRowColumn>
        <TableRowColumn>{student.name}</TableRowColumn>
        <TableRowColumn>{student.campus.name}</TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton
          onClick={() => props.deleteHandler(student)}
          mini={true}>X</FloatingActionButton>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={`/students/${student.id}/form`}>
            <FloatingActionButton mini={true}>
              :D
            </FloatingActionButton>
          </Link>
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
    selectValueChange: state.selectValueChange
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteHandler: (student) => dispatch(deleteStudentFromServerA(student, ownProps))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentStateless));
