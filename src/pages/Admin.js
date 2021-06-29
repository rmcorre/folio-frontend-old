import React from 'react';

import AdminNavBar from '../components/UI/Navbar/AdminNavBar';
import AdminCard from '../components/Admin/AdminCard';
import Identity from '@Identity';
import Contact from '@Contact';
import Avatar from '@Avatar';
import SummarySection from '@SummarySection';

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
              <Contact />
            </AdminCard>
          </div>
          <div className="col-md-3">
            <AdminCard>
              <SummarySection />
            </AdminCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
