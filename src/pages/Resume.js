import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import SideBar from '@sideBar/SideBar';
import Main from '@main/Main';
import Hero from '@hero/Hero';
import Summary from '@summary/Summary';
import EducationList from '@education/EducationList';
import WorkExperienceList from '@workExperience/WorkExperienceList';
import CoreCompetencies from '@coreCompetencies/CoreCompetencies';

const Resume = (props) => {
  return (
    <MDBContainer size="md" className={'z-depth-1'}>
      <h1 className="hide_element">Resume</h1>
      <MDBRow>
        <header></header>
      </MDBRow>
      <MDBRow className="min-vh-100">
        <MDBCol md="5">
          <SideBar>
            <Hero identity={props.identity} />
            <Summary summary={props.identity.summary} />
            <CoreCompetencies core={props.core} />
          </SideBar>
        </MDBCol>
        <MDBCol md="7">
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
  );
};

export default Resume;
