import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import store from '../store';
import {getCampusesFromServerA} from '../action-creators';

export default class AllCampuses extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(getCampusesFromServerA());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ul>
      {this.state.campuses.map(campus =>
        (<li key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>{campus.name}
          </Link>
          </li>)
      )}
      </ul>
    )
  }
}
