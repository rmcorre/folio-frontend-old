import React from 'react';

import { usePortfolioAPI } from '../../store/portfolioContext';
import Education from '../Education/Education';

import styles from './EducationList.module.css';

const EducationList = (props) => {
  const { educations } = usePortfolioAPI();

  const educationList = educations.map(
    ({
      id,
      institution,
      course,
      startDate,
      endDate,
      educationAddress: { countryRegion },
    }) => (
      <Education
        key={id}
        institution={institution}
        course={course}
        startDate={startDate}
        endDate={endDate}
        country={countryRegion}
      />
    )
  );

  return (
    <section className={styles.wrapper}>
      <h4>Educational Background</h4>
      {educationList}
    </section>
  );
};

export default EducationList;
