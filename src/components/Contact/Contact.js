import React from 'react';
import styles from './Contact.module.css';

const contact = (props) => {
  const email = props.contact.email.email;
  const phone = props.contact.phone.number;
  const island = props.contact.address.island;
  const region = props.contact.address.region;
  const location = island + ', ' + region;

  return (
    <div className={`${props.className} ${styles.wrapper}`}>
      <div>{phone}</div>
      <div>{location}</div>
      <div>{email}</div>
    </div>
  );
};

export default contact;
