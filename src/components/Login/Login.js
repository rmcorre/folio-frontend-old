import React from 'react';

import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

import Card from '../UI/Card';

import styles from './Login.module.css';

const Login = (props) => {
  return (
    <Card>
      <MDBContainer className="g-0">
        <MDBRow>
          <MDBCol>
            <header className={styles.header}>
              <h2>Login</h2>
            </header>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <main className={styles.content}>
            <form>
              <MDBInput label="Email" id="email" type="email"></MDBInput>
              <br />
              <MDBInput
                label="Password"
                id="password"
                type="password"
              ></MDBInput>
            </form>
          </main>
        </MDBRow>
        <MDBRow>
          <footer className={styles.actions}>
            <MDBBtn rounded className="col-6 mx-auto">
              Login
            </MDBBtn>
          </footer>
        </MDBRow>
      </MDBContainer>
    </Card>
  );
};

export default Login;
