import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.wrapper}>
      <ul>
        <li>
          <Link to="/print">
            <FontAwesomeIcon icon="print" size="lg" className="mr-4" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon="user-circle" size="lg" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
