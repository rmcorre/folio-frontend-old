import React, { Component } from 'react';
import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Avatar from './components/Avatar/Avatar';
import Summary from './components/Summary/Summary';
import Contact from './components/Contact/Contact';
import Concepts from './components/Concept/Concepts';
import Concept from './components/Concept/Concept';
import Techs from './components/Tech/Techs';
import Tech from './components/Tech/Tech';
import FrameworksOrLibraries from './components/FrameworkOrLibrary/FrameworksOrLibraries';
import FrameworkOrLibrary from './components/FrameworkOrLibrary/FrameworkOrLibrary';
import Tools from './components/Tool/Tools';
import Tool from './components/Tool/Tool';


import AppStyles from './App.module.css';

class App extends Component {
  state = {
    profile: null
  }

  componentDidMount() {
    // http://localhost:8080
    // http://192.168.1.73:8080

    axios.get('http://192.168.1.73:8080/profiles')
      .then(response => {
        console.log(response.data.filter(profile => profile.id === 1));
        this.setState({ profile: response.data.filter(profile => profile.id === 1) });
      });
  }

  render() {

    if (this.state.profile === null) {
      return null;
    }

    const concepts =
      this.state.profile['0'].industry.conceptList.map(({ id, conceptName }) => (
        <Concept
          key={id}
          concept={conceptName}
        />
      ));

    const techs =
      this.state.profile['0'].industry.techList.map(({ id, techName }) => (
        <Tech
          key={id}
          language={techName}
        />
      ));

    const frameworksOrLibraries =
      this.state.profile['0'].frameworkOrLibrarySortedSet.map(({ id, name }) => (
        <FrameworkOrLibrary
          key={id}
          frameworkOrLibraryName={name}
        />
      ));

    const tools =
      this.state.profile['0'].industry.toolList.map(({ id, toolName }) => (
        <Tool
          key={id}
          tool={toolName}
        />
      ));

    return (
      <MDBContainer fluid>
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className="min-vh-100">
          <MDBCol md="3" className={AppStyles.sidebar}>
            <aside>
              <Avatar identity={this.state.profile['0'].identity} role={this.state.profile['0'].role} />
              <Summary summary={this.state.profile['0'].summary} />
              <Contact contact={this.state.profile['0'].identity.contact} />
            </aside>
          </MDBCol>
          <MDBCol md="6" className={AppStyles.main}>
            <main>
              .main-content
            </main>
          </MDBCol>
          <MDBCol md="3" className={AppStyles.sidebar}>
            <aside>
              <Concepts concepts={concepts} />
              <Techs techs={techs} />
              <FrameworksOrLibraries frameworksOrLibraries={frameworksOrLibraries} />
              <Tools tools={tools} />
            </aside>
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
