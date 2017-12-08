import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCampusesFromServerA, getStudentsFromServerA} from '../store';
//import Navbar from './Navbar';
import StudentAll from './StudentAll';
import CampusAll from './CampusAll';
import CampusSingle from './CampusSingle';
import StudentSingle from './StudentSingle';
import Home from './Home';
import AppBarExampleComposition from '../mui-components/AppBarComposition';

class App extends Component {

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    return (
      <Router>
        <div>
          <AppBarExampleComposition /> {/*updated NavBar*/}
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

function mapDispatchToProps(dispatch) {
  return {
    getCampuses: () => dispatch(getCampusesFromServerA()),
    getStudents: () => dispatch(getStudentsFromServerA())
  }
}

export default connect(null, mapDispatchToProps)(App);
