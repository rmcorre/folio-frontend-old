import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

import Grid_2_Col from '../Grid/Col-2-autorow';
import Concept from '@concept/Concept';
import Tech from '@tech/Tech';
import Framework from '@framework/Framework';
import Tool from '@tool/Tool';

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
    <section className={props.layout}>
      <h4>Core Competencies</h4>
      <Grid_2_Col heading={'Concepts'} list={concepts} />
      <Grid_2_Col heading={'Technologies'} list={techs} />
      <Grid_2_Col heading={'Frameworks / Libraries'} list={frameworks} />
      <Grid_2_Col heading={'Tools'} list={tools} />
    </section>
  );
};

export default SkillSet;
