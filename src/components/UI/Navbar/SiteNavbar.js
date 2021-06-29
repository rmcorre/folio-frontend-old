import React from 'react';

//Need this to use collapse functionality
import { Navbar } from 'bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainNav from './MainNav';

const SiteNavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-slateGray`}>
      <div className="container-fluid">
        <a className={`navbar-brand`} href="/">
          <FontAwesomeIcon
            className="text-lightBlue ms-3"
            icon="suitcase"
            size="2x"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MainNav />
        </div>
      </div>
    </nav>
  );
};

export default SiteNavBar;
