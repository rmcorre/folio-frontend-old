import React from 'react';
import classNames from 'classnames';
import useBreakpoint from '../../customHooks/useBreakpoint';

import styles from './Hero.module.css';
import '../../accessibility.css';

import Identity from '../Identity/Identity';
import Contact from '../Contact/Contact';
import Avatar from '../Avatar/Avatar';

const queries = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)'
};

const Hero = (props) => {
  const matchPoints = useBreakpoint(queries);
  const matches = { ...matchPoints };
  const rounded = classNames({
    'rounded-top__left': matches.sm,
  });

  return (
    <section className={`${styles.wrapper} ${rounded}`}>
      <Identity name={props.identity.name} role={props.identity.role} />
      <div className={styles.flexbox}>
        <Contact contact={props.identity.contact} />
        <Avatar />
      </div>
    </section>
  );
};

export default Hero;
