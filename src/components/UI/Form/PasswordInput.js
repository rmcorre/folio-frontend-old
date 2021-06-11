import React from 'react';
import styles from './Input.module.css';

const PasswordInput = (props) => {
  return (
    <div
      className={`mb-5 ${
        props.isValidPassword === false ? styles.invalid : ''
      }`}
    >
      <label htmlFor="passwordInput" className="form-label mb-1">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="passwordInput"
        aria-describedby="passwordHelp"
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <div id="passwordHelp" className="form-text"></div>
    </div>
  );
};

export default PasswordInput;
