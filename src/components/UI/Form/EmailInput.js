import React from 'react';
import styles from './Input.module.css';

const EmailInput = (props) => {
  return (
    <div
      className={`mb-3 ${props.isValidEmail === false ? styles.invalid : ''}`}
    >
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
