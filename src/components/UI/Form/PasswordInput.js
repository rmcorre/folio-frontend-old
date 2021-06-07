import React, { useEffect, useState } from 'react';
import styles from './Input.module.css';

const PasswordInput = (props) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const validatePasswordHandler = () => {
    setIsValidPassword(password.trim().length >= 6);
  };

  useEffect(() => {
    props.getPasswordValidity(isValidPassword);
  }, [isValidPassword]);

  return (
    <div className={`mb-5 ${isValidPassword === false ? styles.invalid : ''}`}>
      <label htmlFor="passwordInput" className="form-label mb-1">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="passwordInput"
        aria-describedby="passwordHelp"
        onChange={passwordHandler}
        onBlur={validatePasswordHandler}
      />
      <div id="passwordHelp" className="form-text"></div>
    </div>
  );
};

export default PasswordInput;
