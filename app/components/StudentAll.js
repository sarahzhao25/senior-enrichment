import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StudentStateless from './StudentStateless';

function StudentAll (props) {
  let students = props.students;
  return (
    <div>
      <Link to="/students/create"><i style={{marginTop: 20, marginLeft: 20}} className={'material-icons'}>person_add</i></Link>
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
