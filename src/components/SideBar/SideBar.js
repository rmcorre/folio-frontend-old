import React from "react";
import styles from "./SideBar.module.css";

const sideBar = (props) => {
  return <div className={`rounded-left ${styles.wrapper}`}>{props.children}</div>;
};

export default sideBar;
