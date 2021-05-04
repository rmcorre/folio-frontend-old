import React from "react";
import styles from "./EducationList.module.css";

const educationList = (props) => {
  const educationItems = props.educationItems;

  return (
    <section>
      <div className={styles.wrapper}>
        <h4>Educational Background</h4>
        {educationItems}
      </div>
    </section>
  );
};

export default educationList;
