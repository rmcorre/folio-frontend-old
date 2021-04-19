import React, { Component } from 'react';
import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Avatar from './components/Avatar/Avatar';
import Summary from './components/Summary/Summary';
import Contact from './components/Contact/Contact';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Concept from './components/CoreConcepts/Concept';
import ToolGroup from './components/Tools/ToolGroup';
import Tool from './components/Tools/Tool';

import AppStyles from './App.module.css';

class App extends Component {
  state = {
    profile: null,
    tech: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]
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

    const concepts = (
      this.state.profile['0'].conceptGroup.concepts.map((concept) => {
        return <Concept
          key={concept.id}
          term={concept.term}
        />
      })
    );

    const tools = (
      this.state.profile['0'].toolGroup.tools.map((tool) => {
        return <Tool
          key={tool.id}
          tool={tool.toolName}
        />
      })
    );

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
              <CoreConcepts concepts={concepts} />
              <ToolGroup tools={tools} />
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
