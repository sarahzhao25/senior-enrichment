import React, {Component} from 'react';
import store from '../store';
import {getStudentsFromServerA} from '../action-creators';
import { get } from 'https';

export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(getStudentsFromServerA());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ul>
      {this.state.students.filter(student => student.campusId == this.props.match.params.campusId).map(student => (<li key={student.id}>{student.name}</li>))}
      </ul>
    )
  }
}
