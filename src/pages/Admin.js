import React, { useContext } from 'react';

import ProfileContext from '../store/profile-context';
import AdminNavBar from '../components/UI/Navbar/AdminNavBar';
import AdminCard from '../components/Admin/AdminCard';
import Identity from '../components/Identity/Identity';
import Contact from '../components/Contact/Contact';
import Avatar from '../components/Avatar/Avatar';
import Summary from '../components/Summary/Summary';

import styles from './Admin.module.css';

const Admin = (props) => {
  const ctx = useContext(ProfileContext);

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
              <Identity name={ctx.profile.identity.name} role={ctx.profile.identity.role}/>
              <Contact contact={ctx.profile.identity.contact} className="text-secondary"/>
            </AdminCard>
          </div>
          <div className="col-md-3">
            <AdminCard>
              {/* <Summary summary={props.identity.summary} className={styles.removeAllStyles}/> */}
            </AdminCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
