import React from 'react';
import styles from './AdminCard.module.css';

const AdminCard = (props) => {

  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Identity</h5>
        <div className={styles.removeAllStyles}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;