import React from 'react';

import styles from './ProjectCollage.module.css';

import resumeClip from '../../img/resume_clip2.png';
import monitor from '../../img/monitor.png';

const ProjectCollage = (props) => {
  return (
    <div className={styles.monitorWrapper}>
      <img className={styles.monitor} src={monitor} width="500" height="auto" />
      <img
        className={styles.resumeClip}
        src={resumeClip}
        width="468"
        height="auto"
      />
    </div>
  );
};

export default ProjectCollage;
