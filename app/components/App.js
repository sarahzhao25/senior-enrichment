import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCampusesFromServerA, getStudentsFromServerA, postStudentToServerA} from '../store';
import StudentAll from './StudentAll';
import CampusAll from './CampusAll';
import CampusSingle from './CampusSingle';
import StudentSingle from './StudentSingle';
import StudentForm from './StudentForm';
import Home from './Home';
import NavBar from './NavBar';

class App extends Component {

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={CampusAll} />
              <Route exact path="/students" component={StudentAll} />
              <Route path="/campuses/:campusId" component={CampusSingle} />
              <Route exact path="/students/create" render={() => (<StudentForm postOrUpdateA={postStudentToServerA} />)} />
              <Route path="/students/:studentId" component={StudentSingle} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCampuses: () => dispatch(getCampusesFromServerA()),
    getStudents: () => dispatch(getStudentsFromServerA())
  }
}

export default connect(null, mapDispatchToProps)(App);
