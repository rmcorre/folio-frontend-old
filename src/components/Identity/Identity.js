import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const Identity = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <h1 className="d-none">Identity</h1>
      <div>
        <div className="h3 fs-2 mb-1">{profile.name}</div>
        <div className="h6 mb-4">{profile.role}</div>
      </div>
    </>
  );
};

export default Identity;
