import React from 'react';

const Login = (props) => {

  return (
    <header>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="user">User</label>
          <input type="email" id="user" name="user"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </header>
  );
};

export default Login;