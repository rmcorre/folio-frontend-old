import React from "react";
import styles from "./WorkExperienceList.module.css";

const workExperienceList = (props) => {
  const workExperienceItems = props.workExperienceItems;

  return (
    <section>
      <div className={styles.wrapper}>
        <h4>Work Experience</h4>
        {workExperienceItems}
      </div>
    </section>
  );
};

export default workExperienceList;
