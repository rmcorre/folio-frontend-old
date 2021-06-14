import React from 'react';
import SiteNavbar from '../components/UI/Navbar/SiteNavbar';

import ProjectText from '../components/Project/ProjectText';

import styles from './Portfolio.module.css';

const Portfolio = (props) => {
  return (
    <>
      <SiteNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col g-0">
            <div className={styles.hero}></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
            <div className="col-6">
              <ProjectText />
            </div>
            <div className="col-6">
              <ProjectText />
            </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
