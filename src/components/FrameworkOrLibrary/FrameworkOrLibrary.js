import React from 'react';

let style = {
  fontSize: ".80rem",
  textAlign: "left"
}

const frameworkOrLibrary = (props) => {

  return (
    <div style={style}>
      {props.frameworkOrLibraryName}
    </div>
  )
}

export default frameworkOrLibrary;