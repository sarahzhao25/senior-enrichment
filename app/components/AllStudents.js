import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import {getStudentsFromServerA} from '../action-creators';
import AddStudentForm from './AddStudentForm';

export default class AllStudents extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(getStudentsFromServerA());
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <AddStudentForm />
        <ul>
        {this.state.students.map(student =>
          (<li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}
            </Link>
            </li>)
        )}
        </ul>
      </div>
    )
  }
}
