import React, { useState } from 'react';

import { usePortfolioAPI } from '../../store/portfolioContext';
import styles from './Summary.module.css';

const Summary = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <section className={`${props.className} ${styles.wrapper}`}>
        <h4>About Me</h4>
        <p>{profile.summary}</p>
      </section>
    </>
  );
};

export default Summary;
