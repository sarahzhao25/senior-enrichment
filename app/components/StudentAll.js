import React from 'react';
import {connect} from 'react-redux';
import StudentForm from './StudentForm';
import StudentStateless from './StudentStateless';
import {postStudentToServerA} from '../store';

function StudentAll (props) {
  let students = props.students;
  return (
    <div>
      <h1>ALL STUDENTS</h1>
      <button>CREATE STUDENT</button> {/*eventually set this up*/}
      <StudentForm  postOrUpdateA={postStudentToServerA} />
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
