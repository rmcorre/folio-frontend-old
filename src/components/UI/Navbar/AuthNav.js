import React from 'react';
import AuthenticationButton from '../AuthenticationButton';
import ProfileButton from '../ProfileButton';

const AuthNav = () => (
  <div className="navbar-nav ml-auto align-items-center">
    <AuthenticationButton />
    <ProfileButton />
  </div>
);

export default AuthNav;
