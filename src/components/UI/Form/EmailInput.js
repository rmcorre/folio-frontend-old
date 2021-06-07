import React, { useEffect, useState } from 'react';
import styles from './Input.module.css';

const EmailInput = (props) => {
  // const [email, setEmail] = useState('');
  // const [isValidEmail, setIsValidEmail] = useState();

  // const emailHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const validateEmailHandler = () => {
  //   setIsValidEmail(email.includes('@'));
  // };

  // useEffect(() => {
  //   props.getEmailValidity(isValidEmail);
  // }, [props, isValidEmail]);

  return (
    <div className={`mb-3 ${props.isValidEmail === false ? styles.invalid : ''}`}>
      <label htmlFor="emailInput" className="form-label mb-1">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="emailInput"
        aria-describedby="emailHelp"
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <div id="emailHelp" className="form-text"></div>
    </div>
  );
};

export default EmailInput;
