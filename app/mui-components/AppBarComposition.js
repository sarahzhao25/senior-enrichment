import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link} from 'react-router-dom';
const Title = "Welcome To Margaret Hamilton Interplanetary Academy of JavaScript";

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/" style={{ textDecoration: 'none' }}><MenuItem primaryText="HOME" /></Link>
    <Link to="/students" style={{ textDecoration: 'none' }}><MenuItem primaryText="STUDENTS" /></Link>
    <Link to="/campuses" style={{ textDecoration: 'none' }}><MenuItem primaryText="CAMPUSES" /></Link>
  </IconMenu>
);

function AppBarExampleComposition() {
    return (
      <div>
        <AppBar
          title="The Hamiltons moved uptown ... and learned to deal with the unimaginable.."
          showMenuIconButton={false}
          iconElementRight={<Logged />}
        />
      </div>
    );
  }

export default AppBarExampleComposition;
