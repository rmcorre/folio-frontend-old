import React from 'react';
import Tool from './Tool.module.css';

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridColumnGap: "5px",
  gridRowGap: "5px"
};

const tools = (props) => {

  return (
    <section>
      <h6 className={Tool.subHeading}>TOOLING</h6>
      <div style={style}>
        {props.tools}
      </div>
    </section>

  );
};

export default tools;