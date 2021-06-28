import React from 'react';

import Identity from '@components/Identity/Identity';
import Contact from '@components/Contact/Contact';
import Avatar from '@components/Avatar/Avatar';

const ProfileSection = (props) => {
  return (
    <section className={`${props.style} ${props.radius}`}>
      <Identity />
      <div className="last flex-between-center">
        <Contact />
        <Avatar />
      </div>
    </section>
  );
};

export default ProfileSection;
