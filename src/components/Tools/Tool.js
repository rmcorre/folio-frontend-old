import React from 'react';

let style = {
    fontSize: ".80rem",
    padding: "0 10px 0 10px"
}

const toolsAndTech = (props) => {

    return (
        <div style={style}>
            {props.tool}
        </div>
    )
}

export default toolsAndTech;