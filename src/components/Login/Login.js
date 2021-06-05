import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';

import styles from './Login.module.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState();
  const [isValidPassword, setIsValidPassword] = useState();

  console.log(email);
  console.log(password);
  console.log(isValidEmail);
  console.log(isValidPassword);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setIsValidEmail(email.includes('@'));
  };

  const validatePasswordHandler = () => {
    setIsValidPassword(password.trim().length >= 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert('Logged In');
  };

  return (
    <Card>
      <header className={styles.header}>
        <h2>Login</h2>
      </header>
      <main className={`${styles.content}`}>
        <form onSubmit={submitHandler}>
          <div
            className={`mb-3 ${isValidEmail === false ? styles.invalid : ''}`}
          >
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              onChange={emailHandler}
              onBlur={validateEmailHandler}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div
            className={`mb-3 ${
              isValidPassword === false ? styles.invalid : ''
            }`}
          >
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
          <div className={styles.actions}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </main>
    </Card>
  );
};

export default Login;
