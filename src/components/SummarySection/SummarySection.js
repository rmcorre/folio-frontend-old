import React, { useState } from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const SummarySection = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <section className={`${props.layout}`}>
        <h4 className="first">About Me</h4>
        <p className="mb-0">{profile.summary}</p>
      </section>
    </>
  );
};

export default SummarySection;
