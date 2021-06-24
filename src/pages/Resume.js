import React, { useContext } from 'react';
import classNames from 'classnames';

import SiteNavbar from '../components/UI/Navbar/SiteNavbar';
import Main from '@main/Main';
import Hero from '@hero/Hero';
import Summary from '@summary/Summary';
import EducationList from '@education/EducationList';
import WorkExperienceList from '@workExperience/WorkExperienceList';
import SkillSet from '@skillSet/SkillSet';
import useBreakpoint from '../customHooks/useBreakpoint';

const queries = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
};

const Resume = (props) => {
  const matchPoints = useBreakpoint(queries);
  const matches = { ...matchPoints };

  const rounded = classNames({
    'rounded-top__left': matches.sm,
  });

  return (
    <>
      <SiteNavbar />
      <div className="container mt-md-5">
        <h1 className="hide_element">Resume</h1>
        <div className="row min-vh-100 shadow-1 mb-5">
          <div className={`col-sm-5 g-0 ${rounded}`}>
            <Hero />
            <Summary />
            <SkillSet />
          </div>
          <div className="col-sm-7 g-0">
            <Main>
              <EducationList educations={props.educations} />
              <WorkExperienceList experiences={props.experiences} />
            </Main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
