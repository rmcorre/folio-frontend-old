import React from 'react';

const MainNav = (props) => {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
        <a className="nav-link" href="/resume">
          Dashboard
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </li> */}
    </ul>
  );
};

export default MainNav;