import React, { useState } from 'react';
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

  return (
    <div className={`mb-3 ${isValidPassword === false ? styles.invalid : ''}`}>
      <label htmlFor="passwordInput" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="passwordInput"
        onChange={passwordHandler}
        onBlur={validatePasswordHandler}
      />
    </div>
  );
};

export default PasswordInput;
