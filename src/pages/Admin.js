import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import AdminNavbar from '../components/UI/Navbar/AdminNavbar';
import Login from '../components/Login/Login';

import styles from './Admin.module.css';

const Admin = (props) => {
  return (
    <>
      <AdminNavbar />
      <MDBContainer size="md">
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className="min-vh-100">
          <MDBCol className="col-5 mx-auto">
            <Login></Login>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Admin;
