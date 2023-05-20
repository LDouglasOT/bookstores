import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ url }) {
  return (
    <div className="nav-wrap">
      <div className="cms-wrapper">
        <p>Bookstore CMS</p>
        <ul>
          <li className="bookli"><Link className="links" to="/">{url ? <span>BOOKS</span> : <span className="selected">BOOKS</span> }</Link></li>
          <li><Link className="linkers" to="/categories">{url ? <span className="selected">CATEGORIES</span> : <span>CATEGORIES</span>}</Link></li>
        </ul>
      </div>

      <img src="https://img.icons8.com/material/24/0290ff/gender-neutral-user--v1.png" alt="profile" className="profilepic" />
    </div>
  );
}
Navbar.propTypes = {
  url: PropTypes.bool,
};
Navbar.defaultProps = {
  url: Boolean,
};
export default Navbar;
