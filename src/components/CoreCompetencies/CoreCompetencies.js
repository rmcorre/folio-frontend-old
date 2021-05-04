import React from "react";
import styles from "./CoreCompetencies.module.css";

const coreCompetencies = (props) => {
  return (
    <section className={styles.wrapper}>
      <h4>Core Competencies</h4>
      <div>{props.children}</div>
    </section>
  );
};

export default coreCompetencies;
