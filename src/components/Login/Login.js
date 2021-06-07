import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import EmailInput from '../UI/Form/EmailInput';
import PasswordInput from '../UI/Form/PasswordInput';

import styles from './Login.module.css';

const Login = (props) => {
  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailValidityHandler = (isValidEmail) => {
    setEmailValidity(isValidEmail);
  };

  const passwordValidityHandler = (isValidPassword) => {
    setPasswordValidity(isValidPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  useEffect(() => {
    setIsFormValid(emailValidity && passwordValidity);
  }, [emailValidity, passwordValidity]);

  return (
    <Card>
      <main className={`${styles.content}`}>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <EmailInput getEmailValidity={emailValidityHandler} />
          <PasswordInput getPasswordValidity={passwordValidityHandler} />
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
