import React from 'react';
import {connect} from 'react-redux';
import {SelectField, MenuItem, RaisedButton} from 'material-ui';
import {selectValueChange, updateStudentToServerA} from '../store';

function CampusAddStudent(props) {
  let students = props.students.filter(student => Number(student.campusId) !== Number(props.campusId));
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault()
        props.submitHandler({campusId: props.campusId}, props.campusSelectChange)}}>
          <div>
            <SelectField
              floatingLabelText="Let's transfer someone here!"
              value={props.campusSelectChange}
              onChange={props.campusSelectChangeHandler}>
              {
                students.map(student => (
                  <MenuItem key={student.id} value={student.id} primaryText={student.name + " - " + student.campus.name} />
                ))
              }
            </SelectField>
            <RaisedButton type="submit" label="SUBMIT" secondary={true} style={{margin: 12}} />
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    campusSelectChange: state.selectValueChange,
    campusId: ownProps.campusId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    campusSelectChangeHandler: (event, index, value) => dispatch(selectValueChange(value)),
    submitHandler: (body, studentId) => dispatch(updateStudentToServerA(body, studentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusAddStudent);
