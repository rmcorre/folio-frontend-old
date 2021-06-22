import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import ProtectedRoute from './auth/protected-route';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Admin from './pages/Admin';
import Loading from './components/Loading/Loading';

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
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from './components/UI/Navbar/AdminNavBar';

library.add(
  faEnvelope,
  faPen,
  faPhoneAlt,
  faMapMarkerAlt,
  faUserCircle,
  faPrint,
  faBars,
  faSuitcase
);

const App = (props) => {
  const { isLoading } = useAuth0();
  const [profile, setProfile] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    // http://localhost:8080 (when on this device)
    // http://192.168.1.73:8080 (when on another another device)

    axios.get('http://localhost:8080/profiles').then((response) => {
      setProfile(response.data.find((profile) => profile.id === 1));
    });
  }, [profile]);

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
        <ProtectedRoute path="/admin" >
          <Admin identity={identity}/>
        </ProtectedRoute>
      </Switch>
    </>
  );
};

export default App;
