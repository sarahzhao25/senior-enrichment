import React from 'react';
import {connect} from 'react-redux';
import {firstNameChange, lastNameChange, emailChange, selectValueChange, gpaChange} from '../store';


//DO I WANT IT TO HAVE A LOCAL STATE? I HAVE QUITE A FEW THINGS GOING ON HERE. ALSO SUBMIT HANDLER IS A BITCH
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
          <label>First Name: </label>
          <input
            value={props.firstNameChange}
            onChange={props.firstNameChangeHandler}
            type="text"
            placeholder="Namae wa?" />

          <label>Last Name: </label>
          <input
            value={props.lastNameChange}
            onChange={props.lastNameChangeHandler}
            type="text"
            placeholder="Last name?" />

          <label>Email Address: </label>
          <input
            value={props.emailChange}
            onChange={props.emailChangeHandler}
            type="email"
            placeholder="... @gmail.com" />

          <label>GPA: </label>
          <input
            value={props.gpaChange}
            onChange={props.gpaChangeHandler}
            type="number"
            step="0.01"
            min="0"
            max="4"
            placeholder="Dat grade point average?" />

          <label>Campus: </label>
          <select value={props.selectValueChange} onChange={props.selectValueChangeHandler}>
          <option value=""> -- select an option -- </option>
          {props.campuses.map(campus => (
            <option value={campus.id} key={campus.id}>{campus.name}</option>
          ))}
          </select>
          <span>
            <button type="submit">Submit!</button>
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
    selectValueChangeHandler: (event) => dispatch(selectValueChange(event.target.value)),
    gpaChangeHandler: (event) => dispatch(gpaChange(event.target.value)),
    submitHandler: (info) => dispatch(ownProps.postOrUpdateA(info, ownProps.instance))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
