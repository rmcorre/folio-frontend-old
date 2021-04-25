import React from 'react';
import FrameworkOrLibrary from './FrameworkOrLibrary.module.css';

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridColumnGap: "5px",
  gridRowGap: "5px"
};

const frameworksOrLibraries = (props) => {

  return (
    <section>
      <h6 className={FrameworkOrLibrary.heading}>FRAMEWORKS/LIBRARIES</h6>
      <div style={style}>
        {props.frameworksOrLibraries}
      </div>
    </section>

  );
};

export default frameworksOrLibraries;