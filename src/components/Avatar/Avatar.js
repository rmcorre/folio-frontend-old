import React from "react";
import styles from "./Avatar.module.css";
import avatarPic from "../../img/profilepicCroppedAndOptimized_400x300.jpg";

const avatar = (props) => {
  const name = props.identity.name.first + " " + props.identity.name.last;
  const role =
    props.role.subCategory.subCategoryName +
    " " +
    props.role.category.categoryName;

  return (
    <section>
      <div className={styles.wrapper}>
        <img
          className="img-fluid"
          src={avatarPic}
          alt="Horacio Correia"
          width="400"
          height="300"
        />
        <div className={styles.overlay}>
          <h3>{name}</h3>
          <div>{role}</div>
        </div>
      </div>
    </section>
  );
};

export default avatar;
