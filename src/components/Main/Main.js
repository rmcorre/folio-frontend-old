import React from "react";
import styles from "./Main.module.css";

const main = (props) => {
  return <main className={styles.wrapper}>{props.children}</main>;
};

export default main;
