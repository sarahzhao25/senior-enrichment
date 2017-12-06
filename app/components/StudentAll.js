import React from 'react';
import {connect} from 'react-redux';
import StudentAddForm from './StudentAddForm';
import StudentStateless from './StudentStateless';

function StudentAll (props) {
  let students = props.students;
  return (
    <div>
      <h1>Hi, these are all the students!! On ALL campuses!!</h1>
      <StudentAddForm />
      <StudentStateless students={students} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(StudentAll);
