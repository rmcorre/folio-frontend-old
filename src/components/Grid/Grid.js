import React from "react";
import styles from "./Grid.module.css";

const grid = (props) => {
  const heading = props.heading;
  const list = props.list;

  return (
    <div className={styles.wrapper}>
      <h6>{heading}</h6>
      <div className={styles.col_2_autorow}>{list}</div>
    </div>
  );
};

export default grid;
