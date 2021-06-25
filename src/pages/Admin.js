import React from 'react';

import AdminNavBar from '../components/UI/Navbar/AdminNavBar';
import AdminCard from '../components/Admin/AdminCard';
import Identity from '../components/Identity/Identity';
import Contact from '../components/Contact/Contact';
import Avatar from '../components/Avatar/Avatar';
import Summary from '../components/Summary/Summary';

import styles from './Admin.module.css';

const Admin = (props) => {
  return (
    <>
      <AdminNavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminCard title="Identity">
              <div className="w-25">
                <Avatar />
              </div>
              <Identity />
              <Contact className="text-secondary" />
            </AdminCard>
          </div>
          <div className="col-md-3">
            <AdminCard>
              <Summary />
            </AdminCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
