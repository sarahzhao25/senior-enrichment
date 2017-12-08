import React from 'react';
import {connect} from 'react-redux';
import {firstNameChange, lastNameChange, emailChange, selectValueChange, gpaChange} from '../store';
import {TextField, SelectField, MenuItem, RaisedButton} from 'material-ui';


function StudentForm(props) {
    return (
      <div>
        <h3>Mmm what's your name?</h3>
        <form
          id="new-student-form"
          onSubmit={(event) => {
            event.preventDefault();
            props.submitHandler({
            firstName: props.firstNameChange || props.campus && props.campus.firstName,
            lastName: props.lastNameChange || props.campus && props.campus.lastName,
            email: props.emailChange || props.campus && props.campus.email,
            gpa: props.gpaChange || props.campus && props.campus.gpa,
            campusId: props.selectValueChange || props.campus && props.campus.campusId
          }
          )}}>
        <div>
          <TextField
            value={props.firstNameChange}
            onChange={props.firstNameChangeHandler}
            floatingLabelText="First Name"
            hintText="Namae wa?" /><br />

          <TextField
            value={props.lastNameChange}
            onChange={props.lastNameChangeHandler}
            floatingLabelText="Last Name"
            hintText="Last name?" /><br />

          <TextField
            value={props.emailChange}
            onChange={props.emailChangeHandler}
            type="email"
            floatingLabelText="Email Address"
            hintText="... @gmail.com" /><br />

          <TextField
            value={props.gpaChange}
            onChange={props.gpaChangeHandler}
            floatingLabelText="GPA"
            type="number"
            step="0.01"
            min="0"
            max="4" /><br />

          <SelectField
          floatingLabelText="Campus"
          value={props.selectValueChange}
          onChange={props.selectValueChangeHandler}>
          <MenuItem value="" primaryText="" />
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

function mapStateToProps(state) {
  return {
    campuses: state.campuses,
    firstNameChange: state.firstNameChange,
    lastNameChange: state.lastNameChange,
    emailChange: state.emailChange,
    selectValueChange: state.selectValueChange,
    gpaChange: state.gpaChange
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    firstNameChangeHandler: (event) => dispatch(firstNameChange(event.target.value)),
    lastNameChangeHandler: (event) => dispatch(lastNameChange(event.target.value)),
    emailChangeHandler: (event) => dispatch(emailChange(event.target.value)),
    selectValueChangeHandler: (event, index, value) => dispatch(selectValueChange(value)),
    gpaChangeHandler: (event) => dispatch(gpaChange(event.target.value)),
    submitHandler: (info) => dispatch(ownProps.postOrUpdateA(info, ownProps.instance))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
