import React from 'react';
import {connect} from 'react-redux';
import {firstNameChange, lastNameChange, emailChange, selectValueChange, gpaChange} from '../store';
import {TextField, SelectField, MenuItem, RaisedButton} from 'material-ui';


function StudentForm(props) {
  let student = props.student;
  console.log(student)
    return (
      <div>
        <h3>Mmm, what's your name?</h3>
        <form
          id="new-student-form"
          onSubmit={(event) => {
            event.preventDefault();
            props.submitHandler({
            firstName: props.firstNameChange || undefined,
            lastName: props.lastNameChange || undefined,
            email: props.emailChange || undefined,
            gpa: props.gpaChange || undefined,
            campusId: props.selectValueChange || undefined
          }
          )}}>
        <div>
          <TextField
            value={props.firstNameChange}
            onChange={props.firstNameChangeHandler}
            floatingLabelText={student && student.firstName}
            hintText="First Name?" /><br />

          <TextField
            value={props.lastNameChange}
            onChange={props.lastNameChangeHandler}
            floatingLabelText={student && student.lastName}
            hintText="Last name?" /><br />

          <TextField
            value={props.emailChange}
            onChange={props.emailChangeHandler}
            type="email"
            floatingLabelText={student && student.email}
            hintText="... @gmail.com" /><br />

          <TextField
            value={props.gpaChange}
            hintText="GPA"
            onChange={props.gpaChangeHandler}
            floatingLabelText={student && student.gpa}
            type="number"
            step="0.01"
            min="0"
            max="4" /><br />

          <SelectField
          hintText="Campus"
          floatingLabelText={student && student.campus.name}
          value={props.selectValueChange}
          onChange={props.selectValueChangeHandler}>
          {props.campuses.map(campus => (
            <MenuItem value={campus.id} key={campus.id} primaryText={campus.name} />
          ))}
          </SelectField><br />

          <span>
            <RaisedButton type="submit" label="SUBMIT" secondary={true} style={{margin: 12}} />
          </span>
        </div>
      </form>
    </div>
    )
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    firstNameChange: state.firstNameChange,
    lastNameChange: state.lastNameChange,
    emailChange: state.emailChange,
    selectValueChange: state.selectValueChange,
    gpaChange: state.gpaChange,
    student: ownProps.student
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    firstNameChangeHandler: (event) => dispatch(firstNameChange(event.target.value)),
    lastNameChangeHandler: (event) => dispatch(lastNameChange(event.target.value)),
    emailChangeHandler: (event) => dispatch(emailChange(event.target.value)),
    selectValueChangeHandler: (event, index, value) => dispatch(selectValueChange(value)),
    gpaChangeHandler: (event) => dispatch(gpaChange(event.target.value)),
    submitHandler: (info) => dispatch(ownProps.postOrUpdateA(info, ownProps.studentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
