import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

import styles from './Login.module.css';

const Login = (props) => {
  return (
    <MDBContainer size="md" className={styles.wrapper}>
      <MDBRow>
        <header>
          <h1>Login Page</h1>
        </header>
      </MDBRow>
      <MDBRow className="min-vh-100">
        <MDBCol>
          <main>
            <form>
              <Input>
                <label htmlFor="user">User</label>
                <input type="email" id="user" name="user" />
              </Input>
              <Input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </Input>
              <Button type="submit">Login</Button>
            </form>
          </main>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
