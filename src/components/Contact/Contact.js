import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const Contact = (props) => {
  const { profile } = usePortfolioAPI();

  return (
    <address>
      {profile.phoneNumber} <br />
      {profile.email} <br />
      {profile.location} <br />
    </address>
  );
};

export default Contact;
