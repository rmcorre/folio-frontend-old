import React from "react";
import styles from "./Avatar.module.css";
import avatarSm from "../../img/profilepic_original_optimized_rounded_border.png";

const avatar = () => {
  return (
    <picture>
      <source media="(max-width: 400px)" srcSet={avatarSm} />
      <img
        className={styles.responsive_img}
        src={avatarSm}
        alt="Horacio Correia"
      />
    </picture>
  );
};

export default avatar;
