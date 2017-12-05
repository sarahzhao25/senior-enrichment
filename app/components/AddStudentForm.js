import React, {Component} from 'react';
import store from '../store';
import {firstNameChange, lastNameChange, emailChange, getCampusesFromServerA} from '../action-creators';

export default class AddStudentForm extends Component {
  constructor() {
    super();
    this.state = store.getState();
    //binding functions
    this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
    this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
  }

  componentDidMount() {
    store.dispatch(getCampusesFromServerA());
    this.unsubscribe = store.subscribe(()=> this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  firstNameChangeHandler(event) {
    store.dispatch(firstNameChange(event.target.value))
  }

  lastNameChangeHandler(event) {
    store.dispatch(lastNameChange(event.target.value))
  }

  emailChangeHandler(event) {
    store.dispatch(emailChange(event.target.value))
  }

  render() {
    return (
      <div>
        <h3>Mmm what's your name?</h3>
        <form id="new-student-form">
        <div>
          <label>First Name</label>
          <input
            value={this.state.firstNameChange}
            onChange={this.firstNameChangeHandler}
            type="text"
            placeholder="Namae wa?"/>

          <label>Last Name</label>
          <input
            value={this.state.lastNameChange}
            onChange={this.lastNameChangeHandler}
            type="text"
            placeholder="Last name?"/>

          <label>Email Address</label>
          <input
            value={this.state.emailChange}
            onChange={this.emailChangeHandler}
            type="text"
            placeholder="... @gmail.com"/>

          <label>Campus</label>
          <select>
          {this.state.campuses.map(campus => (
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
}
