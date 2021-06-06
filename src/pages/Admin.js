import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import AdminNavbar from '../components/UI/Navbar/AdminNavbar';
import Login from '../components/Login/Login';

import styles from './Admin.module.css';

const Admin = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  localStorage.setItem('isLoggedIn', '0');

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
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
      {isLoggedIn && <AdminNavbar onLogout={logoutHandler}/>}
      <MDBContainer size="md">
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className={`${styles.wrapper}`}>
          <MDBCol className="col-4 mx-auto">
            {!isLoggedIn && <Login onLogin={loginHandler}/>}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Admin;
