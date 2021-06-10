import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import AuthOAdmin from './pages/AutoOAdmin';
import SiteNavBar from './components/UI/Navbar/SiteNavbar';
import Navbar from './components/UI/Navbar/NavBar';
import Loading from './components/Loading/Loading';
import ProtectedRoute from './auth/protected-route';

import styles from './App.module.css';
import './index.css';
import './accessibility.css';

// Importing Font Awesome like this allows for global use
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPen,
  faPhoneAlt,
  faMapMarkerAlt,
  faUserCircle,
  faPrint,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faPen,
  faPhoneAlt,
  faMapMarkerAlt,
  faUserCircle,
  faPrint,
  faBars
);

const App = (props) => {
  const { isLoading } = useAuth0();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // http://localhost:8080 (when on this device)
    // http://192.168.1.73:8080 (when on another another device)

    axios.get('http://192.168.1.73:8080/profiles').then((response) => {
      console.log(response.data.filter((profile) => profile.id === 1));
      setProfile(response.data.find((profile) => profile.id === 1));
    });
  }, []);

  if (profile === null) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  const identity = {
    name: profile.identity.name,
    role: profile.identity.role,
    contact: profile.identity.contact,
    summary: profile.identity.summary,
  };

  const core = {
    concepts: profile.industry.concepts,
    techs: profile.industry.techs,
    frameworks: profile.industry.frameworks,
    tools: profile.industry.tools,
  };

  const educations = profile.educations;
  const experiences = profile.experiences;

  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume
            identity={identity}
            core={core}
            educations={educations}
            experiences={experiences}
          />
        </Route>
        <ProtectedRoute path="/admin" component={AuthOAdmin} />
      </Switch>
    </>
  );
};

export default App;
