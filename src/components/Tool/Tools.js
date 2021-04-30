import React from "react";
import Tool from "./Tool.module.css";

const tools = (props) => {
  const tools = props.tools;

  return (
    <section>
      <h6 className="sidebar_subHeading">TOOLING</h6>
      <div className="grid_2col_autoRow">{tools}</div>
    </section>
  );
};

export default tools;
