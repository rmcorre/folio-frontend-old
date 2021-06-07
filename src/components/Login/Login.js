import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import EmailInput from '../UI/Form/EmailInput';
import PasswordInput from '../UI/Form/PasswordInput';

import styles from './Login.module.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState();
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState();
  const [isFormValid, setIsFormValid] = useState();

  console.log(isValidPassword);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const validateEmailHandler = () => {
    setIsValidEmail(email.includes('@'));
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const validatePasswordHandler = () => {
    setIsValidPassword(password.trim().length >= 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  useEffect(() => {
    console.log('useEffect: ' + isValidEmail + ' ' + password.length);
    setIsFormValid(email.includes('@') && password.trim().length >= 6);
  });

  return (
    <Card>
      <main className={`${styles.content}`}>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <EmailInput
            onChange={emailHandler}
            onBlur={validateEmailHandler}
            isValidEmail={isValidEmail}
          />
          <PasswordInput
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
            isValidPassword={isValidPassword}
          />
          <div className={`d-grid ${styles.actions}`}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </Card>
  );
};

export default Login;
