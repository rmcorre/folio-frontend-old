import React from 'react';
import classNames from 'classnames';

import SiteNavbar from '@SiteNavbar';
import ProfileSection from '@ProfileSection';
import SummarySection from '@SummarySection';
import SkillSetSection from '@SkillSetSection';
import EducationSection from '@EducationSection';
import ExperienceSection from '@ExperienceSection';
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

  const rtl = classNames({
    'r-tl': matches.md,
  });

  const rbl = classNames({
    'r-bl': matches.md,
  });

  const rtr = classNames({
    'r-tr': matches.md,
  });

  const rbr = classNames({
    'r-br': matches.md,
  });

  const rStart = classNames({
    'r-start': matches.md,
  });

  const rEnd = classNames({
    'r-end': matches.md,
  });

  return (
    <>
      <SiteNavbar />
      <main>
        <div className="container mt-md-5">
          <h1 className="hide_element">Resume</h1>
          <div className="row min-vh-100 mb-5">
            <div className={`col-sm-5 g-0`}>
              <ProfileSection layout="resume-intro-header" radius={rtl} />
              <SummarySection layout="resume-intro-body" />
              <SkillSetSection layout="resume-intro-body" radius={rbl} />
            </div>
            <div className={`col-sm-7 bg-cream g-0 ${rEnd}`}>
              <EducationSection layout="resume-detail-body" radius={rtr} />
              <ExperienceSection layout="resume-detail-body" radius={rbr} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
