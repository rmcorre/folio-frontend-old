import React from 'react';

//Need this to use collapse functionality
import { Navbar } from 'bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNav from './AdminNav';
import AuthNav from './AuthNav';

const AdminNavbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-5 bg-slateGray">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
          <AdminNav />
          <AuthNav />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
