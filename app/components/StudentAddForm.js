import React from 'react';
import {connect} from 'react-redux';
import {firstNameChange, lastNameChange, emailChange, selectValueChange} from '../store';


//DO I WANT IT TO HAVE A LOCAL STATE? I HAVE QUITE A FEW THINGS GOING ON HERE. ALSO SUBMIT HANDLER IS A BITCH
function StudentAddForm(props) {
    return (
      <div>
        <h3>Mmm what's your name?</h3>
        <form id="new-student-form">
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
            type="text"
            placeholder="... @gmail.com" />

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
    selectValueChange: state.selectValueChange
  }
}

function mapDispatchToProps(dispatch) {
  return {
    firstNameChangeHandler: (event) => dispatch(firstNameChange(event.target.value)),
    lastNameChangeHandler: (event) => dispatch(lastNameChange(event.target.value)),
    emailChangeHandler: (event) => dispatch(emailChange(event.target.value)),
    selectValueChangeHandler: (event) => dispatch(selectValueChange(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentAddForm);
