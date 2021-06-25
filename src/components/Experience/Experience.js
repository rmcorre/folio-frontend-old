import React from 'react';
import styles from './Experience.module.css';

const Experience = (props) => {
  const jobRole = props.jobRole;
  const organization = props.organization;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const summary = props.summary;
  const organizationLine = organization + ' | ' + startDate + ' - ' + endDate;

  const result = props.duties.split(';');
  const dutiesList = result.map((duty, index) => <p key={index}>{duty}</p>);

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.role}>{jobRole}</h6>
      <div className={styles.org}>{organizationLine}</div>
      <div className={styles.summary}>{summary}</div>
      <div className={styles.duties}>{dutiesList}</div>
      <hr />
    </div>
  );
};

export default Experience;
