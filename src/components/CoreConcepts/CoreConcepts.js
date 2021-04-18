import React from 'react';
import CoreConcepts from './CoreConcepts.module.css';

const style = {
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column"
};

const coreConcepts = (props) => {

  return (
    <section>
      <h5 className={CoreConcepts.heading}>Core Concepts</h5>
      <div style={style}>
        {props.concepts}
      </div>
    </section>
  )
}

export default coreConcepts;