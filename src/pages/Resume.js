import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import classNames from 'classnames';

import NavBar from '../components/UI/Navbar/NavBar';
import Main from '@main/Main';
import Hero from '@hero/Hero';
import Summary from '@summary/Summary';
import EducationList from '@education/EducationList';
import WorkExperienceList from '@workExperience/WorkExperienceList';
import CoreCompetencies from '@coreCompetencies/CoreCompetencies';
import useBreakpoint from '../customHooks/useBreakpoint';

import styles from './Resume.module.css';

const queries = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
};

const Resume = (props) => {
  const matchPoints = useBreakpoint(queries);
  console.log(matchPoints);

  const matches = { ...matchPoints };
  console.log('sm: ' + matches.sm);

  const rounded = classNames({
    'rounded-top__left': matches.sm,
  });

  return (
    <>
      <NavBar />
      <MDBContainer size="md">
        <h1 className="hide_element">Resume</h1>
        {/* <MDBRow>
          <header>
          </header>
        </MDBRow> */}
        <MDBRow className="min-vh-100 shadow-1 mb-5">
          <MDBCol sm="5" className={`g-0 ${rounded}`}>
            <Hero identity={props.identity} />
            <Summary summary={props.identity.summary} />
            <CoreCompetencies core={props.core} />
          </MDBCol>
          <MDBCol sm="7" className="g-0">
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
