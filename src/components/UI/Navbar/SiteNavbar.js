import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthNav from './AuthNav';

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
import styles from './SiteNavBar.module.css';

const SiteNavbar = (props) => {
  const { loginWithRedirect } = useAuth0();
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <MDBNavbar
      expand="lg"
      dark
      className={`shadow-0 ${styles.bgColor} ${styles.mbCustom}`}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Folio</MDBNavbarBrand>
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
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Portfolio
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/resume">Resume</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav fullWidth={false}>
            <MDBNavbarItem>
              <AuthNav />
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                className="waves-effect waves-light"
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: 'http://localhost:3000/admin',
                  })
                }
              >
                <Link to="/admin">
                  <FontAwesomeIcon icon="user-circle" size="lg" />
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default SiteNavbar;
