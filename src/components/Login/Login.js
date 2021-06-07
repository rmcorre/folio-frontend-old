import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import EmailInput from '../UI/Form/EmailInput';
import PasswordInput from '../UI/Form/PasswordInput';

import styles from './Login.module.css';

const Login = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <Card>
      <main className={`${styles.content}`}>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <EmailInput />
          <PasswordInput />
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
