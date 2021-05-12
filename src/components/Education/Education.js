import React from "react";
import styles from "./Education.module.css";

const education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const country = props.country;
  const institutionLine = institution + " | " + startDate + " - " + endDate;

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.course}>{course}</h6>
      <div className={styles.institution}>{institutionLine}</div>
      <div>{country}</div>
      <hr />
    </div>
  );
};

export default education;
