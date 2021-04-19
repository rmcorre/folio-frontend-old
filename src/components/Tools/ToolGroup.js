import React from 'react';
import Tool from './Tool.module.css';

const style = {
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr 1fr",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column"
};

const toolGroup = (props) => {

  return (
    <section>
      <h5 className={Tool.heading}>Tools</h5>
      <div style={style}>
        {props.tools}
      </div>
    </section>

  );
};

export default toolGroup;