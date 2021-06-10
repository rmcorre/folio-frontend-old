import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from 'bootstrap';
import AuthNav from './AuthNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SiteNavBar.module.css';

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${styles.bgColor} ${styles.mbCustom}`}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Folio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/resume">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <AuthNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
