import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Link} from 'react-router-dom';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableT = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Students</TableHeaderColumn>
        <TableHeaderColumn>Campus</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    {props.students.map(student => (
      <TableRow key={student.id}>
        <TableRowColumn>{student.id}</TableRowColumn>
        <TableRowColumn>{student.name}</TableRowColumn>
        <TableRowColumn>{student.campus.name}</TableRowColumn>
        <TableRowColumn>
        <FloatingActionButton
        style= {{marginRight: 20}}
        onClick={() => props.deleteHandler(student)}>DELETE STUDENT ENTIRELY</FloatingActionButton></TableRowColumn>
        <TableRowColumn><Link to={`/students/${student.id}/form`}><button>SWAP STUDENT'S CAMPUS</button></Link></TableRowColumn>
      </TableRow>
    ))}
    </TableBody>
  </Table>
);

export default TableT;
