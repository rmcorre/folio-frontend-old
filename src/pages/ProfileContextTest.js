import React from 'react';

import { usePortfolioAPI } from '../store/portfolioContext';
import SkillSet from '../components/SkillSet/SkillSet';
import EducationList from '../components/Education/EducationList';
import WorkExperienceList from '../components/WorkExperience/WorkExperienceList';

const ProfileContextTest = (props) => {
  const { profile, skillSet, educations, experiences } = usePortfolioAPI();

  return (
    <div>
      <ul>
        <h3>Profile Context Test</h3>
        <li>{profile.name}</li>
        <li>{profile.role}</li>
        <li>{profile.email}</li>
        <li>{profile.phoneNumber}</li>
        <li>{profile.summary}</li>
      </ul>
      <SkillSet core={skillSet} />
      <EducationList educations={educations} />
      <WorkExperienceList experiences={experiences} />
    </div>
  );
};

export default ProfileContextTest;
