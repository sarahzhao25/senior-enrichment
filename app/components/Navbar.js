import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>Check out this home navigation bar, yo!</h1>
      <Link to="/"><h3>HOME</h3></Link>
      <Link to="/students"><h3>ALL STUDENTS</h3></Link>
      <Link to="/campuses"><h3>ALL CAMPUSES</h3></Link>
    </nav>
  )
}
