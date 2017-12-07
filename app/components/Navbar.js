import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export default function NavBar() {
  return (
    <div>
      <AppBar
        title="I LIKE FRISBEE"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <nav>
        <h1>Check out this home navigation bar, yo!</h1>
        <span><Link to="/"><RaisedButton label="HOME" /></Link></span>
        <span><Link to="/students"><RaisedButton label="ALL CAMPUSES" /></Link></span>
        <span><Link to="/campuses"><RaisedButton label="ALLSTUDENTS" /></Link></span>
      </nav>
    </div>
  )
}
