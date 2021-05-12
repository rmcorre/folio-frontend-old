import React from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
import styles from "./WorkExperienceList.module.css";

const workExperienceList = (props) => {
  const experienceList = props.experiences.map(
    ({ id, organization, startDate, endDate, jobRole, summary, duties }) => (
      <WorkExperience
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

export default workExperienceList;
