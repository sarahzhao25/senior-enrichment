import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>Check out this home navigation bar, yo!</h1>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/campuses">Campuses</Link>
    </nav>
  )
}
