import React, { useState } from 'react';

import { usePortfolioAPI } from '../../store/portfolioContext';
import styles from './Summary.module.css';

const Summary = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <section className={`${props.style}`}>
        <h4 className="first">About Me</h4>
        <p className="mb-0">{profile.summary}</p>
      </section>
    </>
  );
};

export default Summary;
