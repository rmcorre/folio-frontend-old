import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import avatarSm from '../../img/profilepic_original_optimized_rounded_border_xs.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const userIcon = (
  <FontAwesomeIcon
    className="text-secondary ms-3"
    icon="user-circle"
    size="2x"
  />
);

const image = (
  <img
    className="img-fluid ms-3"
    src={avatarSm}
    width="30px"
    height="auto"
    alt="Horacio Correia"
  />
);

const ProfileButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? image : userIcon;
};

export default ProfileButton;
