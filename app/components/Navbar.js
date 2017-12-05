import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/students'>Students</Link>
      </nav>
    )
  }
}
