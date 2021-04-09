import React from 'react';

let style = {
  marginRight: "15px",
  fontSize: ".80rem"
}

const concept = (props) => {

  return (
    <div style={style}>
      {props.name}
    </div>
  );
}

export default concept;