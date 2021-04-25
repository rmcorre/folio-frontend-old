import React from 'react';

let style = {
  fontSize: ".80rem",
  textAlign: "left"
}

const concept = (props) => {

  return (
    <div style={style}>
      {props.concept}
    </div>
  );
}

export default concept;