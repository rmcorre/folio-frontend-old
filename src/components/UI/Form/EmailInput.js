import React, { useState } from 'react';
import styles from './Input.module.css';

const EmailInput = (props) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const validateEmailHandler = () => {
    setIsValidEmail(email.includes('@'));
  };

  return (
    <div className={`mb-3 ${isValidEmail === false ? styles.invalid : ''}`}>
      <label htmlFor="emailInput" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="emailInput"
        aria-describedby="emailHelp"
        onChange={emailHandler}
        onBlur={validateEmailHandler}
      />
      <div id="emailHelp" className="form-text"></div>
    </div>
  );
};

export default EmailInput;
