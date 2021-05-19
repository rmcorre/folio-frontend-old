import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Resume from './pages/Resume';
import Login from './pages/Login';

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
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faPen,
  faPhoneAlt,
  faMapMarkerAlt,
  faUserCircle,
  faPrint
);

class App extends Component {
  state = {
    profile: null,
  };

  componentDidMount() {
    // http://localhost:8080 (when on this device)
    // http://192.168.1.73:8080 (when on another another device)

    axios.get('http://192.168.1.73:8080/profiles').then((response) => {
      console.log(response.data.filter((profile) => profile.id === 1));
      this.setState({
        profile: response.data.filter((profile) => profile.id === 1),
      });
    });
  }

  render() {
    if (this.state.profile === null) {
      return null;
    }

    const profile = this.state.profile['0'];

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
      <Switch>
        <Route path="/" exact>
          <Resume
            identity={identity}
            core={core}
            educations={educations}
            experiences={experiences}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    );
  }
}

export default App;
