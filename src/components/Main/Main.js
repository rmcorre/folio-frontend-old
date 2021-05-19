import React from 'react';
import MainHeader from './MainHeader';

import styles from './Main.module.css';

const main = (props) => {
  return (
    <main className={styles.wrapper}>
      <MainHeader />
      {props.children}
    </main>
  );
};

export default main;
