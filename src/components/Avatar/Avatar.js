import React from 'react';
import styles from './Avatar.module.css';
import avatarMd from '../../img/profilepic_original_optimized_rounded_border_md.png';
import avatarSm from '../../img/profilepic_original_optimized_rounded_border_sm.png';
import avatarXS from '../../img/profilepic_original_optimized_rounded_border_xs.png';

const avatar = () => {
  return (
    <picture>
      <source media="(min-width: 400px)" srcSet={avatarMd} />
      <source media="(min-width: 300px)" srcSet={avatarSm} />
      <source media="(min-width: 200px)" srcSet={avatarXS} />
      <img
        className={styles.responsive_img}
        src={avatarSm}
        alt="Horacio Correia"
      />
    </picture>
  );
};

export default avatar;
