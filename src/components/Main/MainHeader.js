import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={`rounded-top__right ${styles.wrapper}`}>
      <ul>
        <li>
          <Link to="/print">
            <FontAwesomeIcon icon="print" size="lg" className="me-4" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
