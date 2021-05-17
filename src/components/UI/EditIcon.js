import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './EditIcon.module.css';

const EditIcon = (props) => {
  return (
    <div className={styles.wrapper} onClick={props.onClick}>
      <FontAwesomeIcon icon="pen" />
    </div>
  );
};

export default EditIcon;
