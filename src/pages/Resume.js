import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

import SideBar from '@sideBar/SideBar';
import Main from '@main/Main';
import Hero from '@hero/Hero';
import Summary from '@summary/Summary';
import EducationList from '@education/EducationList';
import WorkExperienceList from '@workExperience/WorkExperienceList';
import CoreCompetencies from '@coreCompetencies/CoreCompetencies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Resume.module.css';

const Resume = (props) => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar
        expand="lg"
        dark
        className={`shadow-0 mb-5 ${styles.bgColor} ${styles.mbCustom}`}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
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
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
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
            <MDBNavbarNav right fullWidth={false}>
              <MDBNavbarItem>
                <MDBNavbarLink className="waves-effect waves-light" to="#!">
                  <FontAwesomeIcon icon="user-circle" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="waves-effect waves-light" to="#!">
                  <FontAwesomeIcon icon="user-circle" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <FontAwesomeIcon icon="user-circle" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer size="md" className="shadow-1">
        <h1 className="hide_element">Resume</h1>
        {/* <MDBRow>
          <header>
          </header>
        </MDBRow> */}
        <MDBRow className={'min-vh-100'}>
          <MDBCol md="5" className="g-0">
            <SideBar>
              <Hero identity={props.identity} />
              <Summary summary={props.identity.summary} />
              <CoreCompetencies core={props.core} />
            </SideBar>
          </MDBCol>
          <MDBCol md="7" className="g-0">
            <Main>
              <EducationList educations={props.educations} />
              <WorkExperienceList experiences={props.experiences} />
            </Main>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <footer></footer>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Resume;
