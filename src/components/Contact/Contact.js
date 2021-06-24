import React from 'react';

import { usePortfolioAPI } from '../../store/portfolioContext';
import styles from './Contact.module.css';

const Contact = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <div className={`${props.className} ${styles.wrapper}`}>
      <div>{profile.email}</div>
      <div>{profile.phoneNumber}</div>
      <div>{profile.location}</div>
    </div>
  );
};

export default Contact;
