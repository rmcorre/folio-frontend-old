import React from "react";
import styles from "./WorkExperienceItem.module.css";

const workExperienceItem = (props) => {
  const jobRole = props.jobRole.toUpperCase();
  const organization =
    props.organization + " | " + props.startDate + " - " + props.endDate;
  const summary = props.summary;

  const result = props.duties.split(";");
  const dutiesList = result.map((duty, index) => <div key={index}>{duty}</div>);

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.role}>{jobRole}</h6>
      <div className={styles.org}>{organization}</div>
      <div className={styles.summary}>{summary}</div>
      {dutiesList}
    </div>
  );
};

export default workExperienceItem;
