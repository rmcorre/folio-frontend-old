import React from "react";
import styles from "./Summary.module.css";

const summary = (props) => {
  const summary = props.summary.summary;

  return (
    <section>
      <div className={styles.wrapper}>
        <h4>About Me</h4>
        <p>{summary}</p>
      </div>
    </section>
  );
};

export default summary;
