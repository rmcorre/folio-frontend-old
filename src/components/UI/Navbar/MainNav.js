import React from 'react';

const MainNav = (props) => {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/resume">
          Resume
        </a>
      </li>
    </ul>
  );
};

export default MainNav;