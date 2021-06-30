import React from 'react';

import avatarMd from '../../img/profilepic_original_optimized_rounded_border_md.png';
import avatarSm from '../../img/profilepic_original_optimized_rounded_border_sm.png';
import avatarXS from '../../img/profilepic_original_optimized_rounded_border_xs.png';

const Avatar = () => {
  return (
    <picture>
      <source media="(min-width: 400px)" srcSet={avatarMd} />
      {/* <source media="(min-width: 300px)" srcSet={avatarSm} /> */}
      <source media="(min-width: 200px)" srcSet={avatarXS} />
      <img className="avatar" src={avatarSm} alt="Horacio Correia" />
    </picture>
  );
};

export default Avatar;
