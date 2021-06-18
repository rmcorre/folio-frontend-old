import React from 'react';
import AdminNavBar from '../components/UI/Navbar/AdminNavBar';
import SignupForm from '../components/SignupForm/SignupForm';

const Admin = (props) => {
  return (
    <>
      <AdminNavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Dashboard</h1>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
