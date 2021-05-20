import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {

  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  );
};

export default Input;