import React from 'react';

import { usePortfolioAPI } from '../store/portfolioContext';
import SkillSet from '../components/SkillSet/SkillSet';
import EducationList from '../components/Education/EducationList';
import ExperienceList from '../components/Experience/ExperienceList';

const ProfileContextTest = (props) => {
  const { profile } = usePortfolioAPI();

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
      <SkillSet />
      <EducationList />
      <ExperienceList />
    </div>
  );
};

export default ProfileContextTest;
