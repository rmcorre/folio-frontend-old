import React from 'react';
import CoreConcepts from './CoreConcepts.module.css';

const coreConcepts = (props) => {

  return (
    <section>
      <h5 className={CoreConcepts.heading}>Core Concepts</h5>
      {props.concepts}
    </section>
  )
}

export default coreConcepts;