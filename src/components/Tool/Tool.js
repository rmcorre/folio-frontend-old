import React from 'react';

let style = {
    fontSize: ".80rem",
    textAlign: "left"
}

const tool = (props) => {

    return (
        <div style={style}>
            {props.tool}
        </div>
    )
}

export default tool;