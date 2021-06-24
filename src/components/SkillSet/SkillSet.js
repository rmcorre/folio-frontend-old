import React from 'react';

import { usePortfolioAPI } from '../../store/portfolioContext';
import Grid from '../Grid/Grid';
import Concept from '@concept/Concept';
import Tech from '@tech/Tech';
import Framework from '@framework/Framework';
import Tool from '@tool/Tool';

import styles from './SkillSet.module.css';

const SkillSet = (props) => {
  const { skillSet } = usePortfolioAPI();

  const concepts = skillSet.concepts.map(({ id, concept }) => (
    <Concept key={id} concept={concept} />
  ));

  const techs = skillSet.techs.map(({ id, tech }) => (
    <Tech key={id} language={tech} />
  ));

  const frameworks = skillSet.frameworks.map(({ id, framework }) => (
    <Framework key={id} framework={framework} />
  ));

  const tools = skillSet.tools.map(({ id, tool }) => (
    <Tool key={id} tool={tool} />
  ));

  return (
    <section className={styles.wrapper}>
      <h4>Core Competencies</h4>
      <Grid heading={'Concepts'} list={concepts} />
      <Grid heading={'Technologies'} list={techs} />
      <Grid heading={'Frameworks / Libraries'} list={frameworks} />
      <Grid heading={'Tools'} list={tools} />
    </section>
  );
};

export default SkillSet;