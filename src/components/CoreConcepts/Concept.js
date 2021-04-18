import React from 'react';

let style = {
  fontSize: ".80rem",
  padding: "0 10px 0 10px"
}

const concept = (props) => {

  return (
    <div style={style}>
      {props.term}
    </div>
  );
}

export default concept;