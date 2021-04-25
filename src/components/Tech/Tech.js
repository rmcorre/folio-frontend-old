import React from 'react';

let style = {
  fontSize: ".80rem",
  textAlign: "left"
}

const tech = (props) => {

  return (
    <div style={style}>
      {props.language}
    </div>
  )
}

export default tech;