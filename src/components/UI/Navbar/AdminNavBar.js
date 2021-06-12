import React from 'react';
import AdminNav from './AdminNav';
import AuthNav from './AuthNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './NavBar.module.css';

const AdminNavbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark mb-5 ${styles.bgColor}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
          <AdminNav />
          <AuthNav />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;