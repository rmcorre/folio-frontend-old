import React from 'react';

import Identity from '@Identity';
import Contact from '@Contact';
import Avatar from '@Avatar';

const ProfileSection = (props) => {
  return (
    <section className={`${props.layout} ${props.radius}`}>
      <Identity />
      <div className="last flex-between-center">
        <Contact />
        <Avatar />
      </div>
    </section>
  );
};

export default ProfileSection;
