import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import SideBar from "@sideBar/SideBar";
import Grid from "@grid/Grid";
import Main from "@main/Main";
import Avatar from "@avatar/Avatar";
import Summary from "@summary/Summary";
import Contact from "@contact/Contact";
import EducationList from "@education/EducationList";
import EducationItem from "@education/EducationItem";
import WorkExperienceList from "@workExperience/WorkExperienceList";
import WorkExperienceItem from "@workExperience/WorkExperienceItem";
import CoreCompetencies from "@coreCompetencies/CoreCompetencies";
import Concept from "@concept/Concept";
import Tech from "@tech/Tech";
import FrameworkOrLibrary from "@frameworkOrLibrary/FrameworkOrLibrary";
import Tool from "@tool/Tool";
import styles from "./App.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faPhoneAlt, faMapMarkerAlt);

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
    console.log(profile.workExperienceSortedSet);

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

    const frameworks = profile.frameworkOrLibrarySortedSet.map(
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
          <MDBCol md="3" className="light-blue darken-3">
            <SideBar>
              <Avatar identity={identity} role={role} />
              <Contact contact={contact} />
              <Summary summary={summary} />
            </SideBar>
          </MDBCol>
          <MDBCol md="6">
            <Main>
              <EducationList educationItems={educationItems} />
              <WorkExperienceList workExperienceItems={workExperienceItems} />
            </Main>
          </MDBCol>
          <MDBCol md="3" className="light-blue darken-3">
            <SideBar>
              <CoreCompetencies>
                <Grid heading={"Concepts"} list={concepts} />
                <Grid heading={"Technologies"} list={techs} />
                <Grid heading={"Frameworks / Libraries"} list={frameworks} />
                <Grid heading={"Tools"} list={tools} />
              </CoreCompetencies>
            </SideBar>
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
