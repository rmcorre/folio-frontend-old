import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import AdminNavbar from '../components/UI/Navbar/AdminNavbar';
import Login from '../components/Login/Login';

import styles from './ManualAdmin.module.css';

const AuthOAdmin = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    // check email and password?
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* <AdminNavbar /> */}
      <MDBContainer size="md">
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className={`${styles.wrapper}`}>
          <MDBCol className="col-4 mx-auto"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AuthOAdmin;
