import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import SiteNavBar from '../components/UI/Navbar/SiteNavbar';
import SideBar from '@sideBar/SideBar';
import Main from '@main/Main';
import Hero from '@hero/Hero';
import Summary from '@summary/Summary';
import EducationList from '@education/EducationList';
import WorkExperienceList from '@workExperience/WorkExperienceList';
import CoreCompetencies from '@coreCompetencies/CoreCompetencies';

import styles from './Resume.module.css';

const Resume = (props) => {
  return (
    <>
      <SiteNavBar />
      <MDBContainer size="md" className="shadow-1 rounded-top__right">
        <h1 className="hide_element">Resume</h1>
        {/* <MDBRow>
          <header>
          </header>
        </MDBRow> */}
        <MDBRow className="min-vh-100 rounded-top__right">
          <MDBCol md="5" className="g-0">
            <SideBar>
              <Hero identity={props.identity} />
              <Summary summary={props.identity.summary} />
              <CoreCompetencies core={props.core} />
            </SideBar>
          </MDBCol>
          <MDBCol md="7" className="g-0 rounded-top__right">
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
