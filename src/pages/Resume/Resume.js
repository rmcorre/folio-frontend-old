import React from 'react';
import classNames from 'classnames';

import SiteNavbar from '@components/UI/Navbar/SiteNavbar';
import Main from '@main/Main';
import ProfileSection from '@components/ProfileSection/ProfileSection';
import SummarySection from '@summarySection/SummarySection';
import SkillSetSection from '@skillSetSection/SkillSetSection';
import EducationList from '@education/EducationList';
import ExperienceList from '@experience/ExperienceList';
import useBreakpoint from '../../customHooks/useBreakpoint';

const queries = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
};

const Resume = (props) => {
  const matchPoints = useBreakpoint(queries);
  const matches = { ...matchPoints };

  const brtl = classNames({
    'br-tl': matches.md,
  });

  return (
    <>
      <SiteNavbar />
      <div className="container mt-md-5">
        <h1 className="hide_element">Resume</h1>
        <div className="row min-vh-100 shadow-sm mb-5">
          <div className={`col-sm-5 g-0 ${brtl}`}>
            <ProfileSection style="resume-col_1-header" radius={brtl} />
            <SummarySection style="resume-col_1-main" />
            <SkillSetSection style="resume-col_1-main" />
          </div>
          <div className="col-sm-7 g-0">
            <Main>
              <EducationList />
              <ExperienceList />
            </Main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
