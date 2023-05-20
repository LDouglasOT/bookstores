import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-wrap">
      <p>BOOKSTORE</p>
      <ul>
        <li><Link className="links" to="/">Books</Link></li>
        <li><Link className="links" to="/categories">Categories</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
