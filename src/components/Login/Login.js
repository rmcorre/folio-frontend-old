import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';

import styles from './Login.module.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState();
  const [isValidPassword, setIsValidPassword] = useState();
  const [isFormValid, setIsFormValid] = useState(false);

  console.log(email);
  console.log(password);
  console.log(isValidEmail);
  console.log(isValidPassword);

  useEffect(() => {
    //debouncing
    const setTimeoutId = setTimeout(() => {
      setIsFormValid(
        email.includes('@') && password.trim().length >= 6
      );
    }, 500);

    //clean-up function
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [email, password]);

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
    props.onLogin(email, password);
  };

  return (
    <Card>
      <main className={`${styles.content}`}>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div
            className={`mb-3 ${isValidEmail === false ? styles.invalid : ''}`}
          >
            <label htmlFor="emailInput" className="form-label mb-1">
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
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div
            className={`mb-5 ${
              isValidPassword === false ? styles.invalid : ''
            }`}
          >
            <label htmlFor="passwordInput" className="form-label mb-1">
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
          <div className={`d-grid ${styles.actions}`}>
            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </Card>
  );
};

export default Login;
