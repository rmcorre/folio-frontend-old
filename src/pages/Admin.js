import React from 'react';
import AdminNavBar from '../components/UI/Navbar/AdminNavBar';
import AdminCard from '../components/Admin/AdminCard';
import Hero from '../components/Hero/Hero';
import Summary from '../components/Summary/Summary';

import styles from './Admin.module.css';

const Admin = (props) => {

  return (
    <>
      <AdminNavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminCard>
              <Hero identity={props.identity} className={`${styles.removeAllStyles} text-secondary`}/>
            </AdminCard>
          </div>
          <div className="col-md-3">
            <AdminCard>
              <Summary summary={props.identity.summary} className={styles.removeAllStyles}/>
            </AdminCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
