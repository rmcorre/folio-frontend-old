import React from 'react';
import Tech from './Tech.module.css';

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridColumnGap: "5px",
  gridRowGap: "5px"
};

const techs = (props) => {

  return (
    <section>
      <h6 className={Tech.heading}>TECHNOLOGIES</h6>
      <div style={style}>
        {props.techs}
      </div>
    </section>

  );
};

export default techs;