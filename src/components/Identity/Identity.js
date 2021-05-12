import React from "react";
import styles from "./Identity.module.css";

const identity = (props) => {
  const first = props.name.first;
  const last = props.name.last;
  const fullName = first + " " + last;

  const area = props.role.subCategory.subCategoryName;
  const scope = props.role.category.categoryName;
  const role = area + " " + scope;

  return (
    <>
      <h1 className="hide_element">Identity</h1>
      <div className={styles.name}>{fullName}</div>
      <div className={styles.role}>{role}</div>
    </>
  );
};

export default identity;
