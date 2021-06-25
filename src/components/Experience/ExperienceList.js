import React from 'react';
import Experience from '../Experience/Experience';
import styles from './ExperienceList.module.css';

const ExperienceList = (props) => {
  const experienceList = props.experiences.map(
    ({ id, organization, startDate, endDate, jobRole, summary, duties }) => (
      <Experience
        key={id}
        organization={organization}
        startDate={startDate}
        endDate={endDate}
        jobRole={jobRole}
        summary={summary}
        duties={duties}
      />
    )
  );

  return (
    <section className={styles.wrapper}>
      <h4>Work Experience</h4>
      {experienceList}
    </section>
  );
};

export default ExperienceList;
