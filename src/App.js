import React, { Component } from 'react';
import axios from 'axios';

import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import Avatar from './components/Avatar/Avatar';
import Summary from './components/Summary/Summary';
import Contact from './components/Contact/Contact';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Concept from './components/CoreConcepts/Concept';
import ToolsAndTech from './components/ToolsAndTech/ToolsAndTech';

import AppStyles from './App.module.css';

class App extends Component {
  state = {
    identity: [],
    summaries: [],
    concepts: [
      {id: 1, name: 'OOP Principles'}, 
      {id: 2, name: 'Domain Modeling'}, 
      {id: 3, name: 'RDBMS Design'}, 
      {id: 4, name: 'Design Patterns'}, 
      {id: 5, name: 'Software Architecture'}
    ],
    toolsAndTech: [
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
    // http://192.168.1.74:8080
    // axios.get('localhost:8080/identities')
    //   .then(response => {
    //     console.log(response.data);
    //     const data = response.data;
    //     let activeIdentity = data.filter(identity => {return identity.id === 1})
    //     this.setState({name: activeIdentity[0].name});
    //     this.setState(state => state.identity = response.data);
    //     console.log(activeIdentity[0].name);
    //   });

    // http://192.168.1.74:8080
    axios.get('http://localhost:8080/summaries')
      .then(response => {
        console.log(response);
        this.setState({summaries: response.data});
      });
  }

  render() {
    const summary = this.state.summaries
      .filter(summary => summary.id === 1)
      .map(summary => {
        return <Summary summary={summary.summary}/>
      });
    let concepts = (
      <div className="d-flex justify-content-between flex-wrap">
        {this.state.concepts.map((concept) => {
          return <Concept
            name={concept.name} 
            key={concept.id} />
        })}
      </div>
    );

    return (
      <MDBContainer fluid>
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className="min-vh-100">
          <MDBCol md="3" className={AppStyles.sidebar}>
            <aside>
              {/* <Avatar 
                first={this.state.identity[0].name.first} 
                last={this.state.identity[0].name.last}
              /> */}
              {summary}
              <Contact />
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
              <ToolsAndTech />
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
