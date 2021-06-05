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

  return (
    <>
      {isLoggedIn && <AdminNavbar />}
      <MDBContainer size="md">
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className={`${styles.wrapper}`}>
          <MDBCol className="col-5 mx-auto">
            <Login />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Admin;
