import React from 'react';
import Summary from './Summary.module.css';

const summary = (props) => {

  return (
    <section>
      <h5 className={Summary.heading}>About Me</h5>
      <p className={Summary.body}>
        {props.summary.summary}
      </p>
    </section>
  )
}

export default summary;