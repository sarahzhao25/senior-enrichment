import React from 'react';
import {Link} from 'react-router-dom';

export default function StudentStateless (props) {
  let students = props.students;
  return (
    <table>
      <tbody>
        <tr>
          <th>Students</th>
          <th>Campus</th>
          <th>Campus Description</th>
        </tr>

        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.campus.name}</td>
            <td>{student.campus.description}</td>
            <td><button>X-KILL!</button></td>
            <td><Link to={`/students/${student.id}`}><button>Check me out!</button></Link></td>
          </tr>
          ))}
      </tbody>
    </table>
  )
}
