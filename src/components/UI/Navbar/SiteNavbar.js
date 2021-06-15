import React from 'react';

import { Navbar } from 'bootstrap'; //Need this to use collapse functionality
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainNav from './MainNav';

import styles from './NavBar.module.css';

const SiteNavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bgColor}`}>
      <div className="container-fluid">
        <a className={`navbar-brand`} href="/">
          <FontAwesomeIcon
            className="text-info ms-3"
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
