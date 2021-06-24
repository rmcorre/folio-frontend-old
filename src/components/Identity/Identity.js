import React from 'react';

import { usePortfolioAPI } from '../../store/portfolioContext';
import styles from './Identity.module.css';

const Identity = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <h1 className="hide_element">Identity</h1>
      <div className={styles.name}>{profile.name}</div>
      <div className={styles.role}>{profile.role}</div>
    </>
  );
};

export default Identity;
