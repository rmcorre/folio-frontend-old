import React, { Component } from "react";
import axios from "axios";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Avatar from "./components/Avatar/Avatar";
import Summary from "./components/Summary/Summary";
import Contact from "./components/Contact/Contact";
import EducationList from "./components/Education/EducationList/EducationList";
import EducationItem from "./components/Education/EducationItem/EducationItem";
import WorkExperienceList from "./components/WorkExperience/WorkExperienceList/WorkExperienceList";
import WorkExperienceItem from "./components/WorkExperience/WorkExperienceItem/WorkExperienceItem";

import Concepts from "./components/Concept/Concepts";
import Concept from "./components/Concept/Concept";
import Techs from "./components/Tech/Techs";
import Tech from "./components/Tech/Tech";
import FrameworksOrLibraries from "./components/FrameworkOrLibrary/FrameworksOrLibraries";
import FrameworkOrLibrary from "./components/FrameworkOrLibrary/FrameworkOrLibrary";
import Tools from "./components/Tool/Tools";
import Tool from "./components/Tool/Tool";

import AppStyles from "./App.module.css";

class App extends Component {
  state = {
    profile: null,
  };

  componentDidMount() {
    // http://localhost:8080 (when on this device)
    // http://192.168.1.73:8080 (when on another another device)

    axios.get("http://192.168.1.73:8080/profiles").then((response) => {
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

    const profile = this.state.profile["0"];
    const identity = profile.identity;
    const role = profile.role;
    const summary = profile.summary;
    const contact = profile.identity.contact;

    const educationItems = profile.educationSortedSet.map(
      ({
        id,
        institution,
        course,
        startDate,
        endDate,
        educationAddress: { countryRegion },
      }) => (
        <EducationItem
          key={id}
          institution={institution}
          course={course}
          startDate={startDate}
          endDate={endDate}
          country={countryRegion}
        />
      )
    );

    const workExperienceItems = profile.workExperienceSortedSet.map(
      ({ id, organization, startDate, endDate, jobRole, summary, duties }) => (
        <WorkExperienceItem
          key={id}
          organization={organization}
          startDate={startDate}
          endDate={endDate}
          jobRole={jobRole}
          summary={summary}
          duties={duties}
        />
      )
    );

    const concepts = profile.industry.conceptList.map(({ id, conceptName }) => (
      <Concept key={id} concept={conceptName} />
    ));

    const techs = profile.industry.techList.map(({ id, techName }) => (
      <Tech key={id} language={techName} />
    ));

    const frameworksOrLibraries = profile.frameworkOrLibrarySortedSet.map(
      ({ id, name }) => (
        <FrameworkOrLibrary key={id} frameworkOrLibraryName={name} />
      )
    );

    const tools = profile.industry.toolList.map(({ id, toolName }) => (
      <Tool key={id} tool={toolName} />
    ));

    return (
      <MDBContainer fluid>
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className="min-vh-100">
          <MDBCol md="3" className="sidebar">
            <aside>
              <Avatar identity={identity} role={role} />
              <Summary summary={summary} />
              <Contact contact={contact} />
            </aside>
          </MDBCol>
          <MDBCol md="6" className="main">
            <main>
              <EducationList educationItems={educationItems} />
              <WorkExperienceList workExperienceItems={workExperienceItems} />
            </main>
          </MDBCol>
          <MDBCol md="3" className="sidebar">
            <aside>
              <Concepts concepts={concepts} />
              <Techs techs={techs} />
              <FrameworksOrLibraries
                frameworksOrLibraries={frameworksOrLibraries}
              />
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
