import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = (props) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="active"
          aria-current="page"
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          to="/resume"
          className="nav-link"
          activeClassName="active"
          aria-current="page"
        >
          Resume
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNav;
