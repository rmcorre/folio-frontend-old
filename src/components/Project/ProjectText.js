import React from 'react';

import styles from './ProjectText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectText = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <FontAwesomeIcon className="text-info me-3" icon="suitcase" size="2x" />
        <h1 className="m-0">folio</h1>
      </div>
    </div>
  );
};

export default ProjectText;
