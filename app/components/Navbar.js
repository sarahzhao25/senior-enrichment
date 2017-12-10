import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

function NavBar() {
    return (
      <div>
        <AppBar
          title={Title}
          showMenuIconButton={false}
          iconElementRight={<Logged />}
        />
      </div>
    );
  }

export default NavBar;
