import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import StudentAll from './StudentAll';
import CampusAll from './CampusAll';
import CampusSingle from './CampusSingle';
import StudentSingle from './StudentSingle';
import Home from './Home';
import {getCampusesFromServerA, getStudentsFromServerA} from '../store';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={CampusAll} />
              <Route exact path="/students" component={StudentAll} />
              <Route path="/campuses/:campusId" component={CampusSingle} />
              <Route path="/students/:studentId" component={StudentSingle} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps() {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCampuses: () => dispatch(getCampusesFromServerA()),
    getStudents: () => dispatch(getStudentsFromServerA())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
