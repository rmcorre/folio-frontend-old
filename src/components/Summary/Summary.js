import React, { useState } from 'react';
import styles from './Summary.module.css';

const Summary = (props) => {
  const summary = props.summary.summary;

  return (
    <>
      <section className={styles.wrapper}>
        <h4>
          About Me
        </h4>
        <p>{summary}</p>
      </section>
    </>
  );
};

export default Summary;
