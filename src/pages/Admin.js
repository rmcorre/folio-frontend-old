import React from 'react';
import AdminNavBar from '../components/UI/Navbar/AdminNavBar';

const Admin = (props) => {
  return (
    <>
      <AdminNavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
