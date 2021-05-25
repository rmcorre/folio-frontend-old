import React from 'react';
import MainHeader from './MainHeader';

import styles from './Main.module.css';

const Main = (props) => {
  return (
    <main className={`rounded-top__right ${styles.wrapper}`}>
      <MainHeader className={styles.rounded} />
      {props.children}
    </main>
  );
};

export default Main;
