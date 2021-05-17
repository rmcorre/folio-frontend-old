import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import SideBar from '@sideBar/SideBar';
import Main from '@main/Main';
import Hero from '@hero/Hero';
import Summary from '@summary/Summary';
import EducationList from '@education/EducationList';
import WorkExperienceList from '@workExperience/WorkExperienceList';
import CoreCompetencies from '@coreCompetencies/CoreCompetencies';

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
} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faPen, faPhoneAlt, faMapMarkerAlt);

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
      <MDBContainer size="md" className={'z-depth-1'}>
        <h1 className="hide_element">Resume</h1>
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className="min-vh-100">
          <MDBCol md="5">
            <SideBar>
              <Hero identity={identity} />
              <Summary summary={identity.summary} />
              <CoreCompetencies core={core} />
            </SideBar>
          </MDBCol>
          <MDBCol md="7">
            <Main>
              <EducationList educations={educations} />
              <WorkExperienceList experiences={experiences} />
            </Main>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <footer></footer>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
