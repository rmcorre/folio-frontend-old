import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AdminNavBar.module.css';

const AdminNavbar = (props) => {
  const { logout } = useAuth0();
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <MDBNavbar
      expand="lg"
      dark
      className={`shadow-0 mb-5 ${styles.bgColor} ${styles.mbCustom}`}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Portfolio</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
        >
          <FontAwesomeIcon icon="bars" />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Dashboard</MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right fullWidth={false}>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })}>
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="waves-effect waves-light" to="#!">
                <FontAwesomeIcon icon="user-circle" size="lg" />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default AdminNavbar;
