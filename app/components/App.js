import React, {Component} from 'react';
import Navbar from './Navbar';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/' component={AllCampuses}/>
              <Route exact path='/students' component={AllStudents}/>
              <Route exact path='/campuses' component={AllCampuses}/>
              <Route path='/campuses/:campusId' component={SingleCampus}/>
              <Route path='/students/:studentId' component={SingleStudent}/>
              <Route path='/' component={AllCampuses}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
