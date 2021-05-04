import React from "react";
import styles from "./EducationItem.module.css";

const education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const country = props.country;

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.course}>{course.toUpperCase()}</h6>
      <div className={styles.institution}>
        {institution + " | " + startDate + " - " + endDate}
      </div>
      <div>{country}</div>
    </div>
  );
};

export default education;
