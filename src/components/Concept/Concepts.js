import React from 'react';
import Concepts from './Concepts.module.css';

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "auto",
  gridColumnGap: "5px",
  gridRowGap: "5px"
};

const concepts = (props) => {

  return (
    <section>
      <h5 className={Concepts.heading}>Core Competencies</h5>
      <h6 className={Concepts.subHeading}>CONCEPTS</h6>
      <div style={style}>
        {props.concepts}
      </div>
    </section>
  )
}

export default concepts;