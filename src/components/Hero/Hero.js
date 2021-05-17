import React from 'react';
import styles from './Hero.module.css';
import '../../accessibility.css';

import Identity from '../Identity/Identity';
import Contact from '../Contact/Contact';
import Avatar from '../Avatar/Avatar';

const hero = (props) => {
  return (
    <section className={styles.wrapper}>
      <Identity name={props.identity.name} role={props.identity.role} />
      <div className={styles.flexbox}>
        <Contact contact={props.identity.contact} />
        <Avatar />
      </div>
    </section>
  );
};

export default hero;
