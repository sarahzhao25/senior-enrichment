import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {deleteStudentFromServerA} from '../store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

function StudentStateless (props) {
  let students = props.students;
  return (
    <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Students</TableHeaderColumn>
        <TableHeaderColumn>Campus</TableHeaderColumn>
        <TableHeaderColumn>Expel Student?</TableHeaderColumn>
        <TableHeaderColumn>Transfer Student?</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}>
    {students.map(student => (
      <TableRow key={student.id}>
        <TableRowColumn>{student.id}</TableRowColumn>
        <TableRowColumn><Link to={`/students/${student.id}`}>{student.name}</Link></TableRowColumn>
        <TableRowColumn>{student.campus.name}</TableRowColumn>
        <TableRowColumn>
          <FlatButton
          onClick={() => props.deleteHandler(student)}
          >X</FlatButton>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={`/students/${student.id}/form`}>
            <FlatButton>
              :D
            </FlatButton>
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
