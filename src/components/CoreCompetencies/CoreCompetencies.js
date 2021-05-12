import React from "react";

import Grid from "../Grid/Grid";
import Concept from "@concept/Concept";
import Tech from "@tech/Tech";
import Framework from "@framework/Framework";
import Tool from "@tool/Tool";

import styles from "./CoreCompetencies.module.css";

const coreCompetencies = (props) => {
  const concepts = props.core.concepts.map(({ id, conceptName }) => (
    <Concept key={id} concept={conceptName} />
  ));

  const techs = props.core.techs.map(({ id, techName }) => (
    <Tech key={id} language={techName} />
  ));

  const frameworks = props.core.frameworks.map(({ id, name }) => (
    <Framework key={id} framework={name} />
  ));

  const tools = props.core.tools.map(({ id, toolName }) => (
    <Tool key={id} tool={toolName} />
  ));

  return (
    <section className={styles.wrapper}>
      <h4>Core Competencies</h4>
      <Grid heading={"Concepts"} list={concepts} />
      <Grid heading={"Technologies"} list={techs} />
      <Grid heading={"Frameworks / Libraries"} list={frameworks} />
      <Grid heading={"Tools"} list={tools} />
    </section>
  );
};

export default coreCompetencies;
