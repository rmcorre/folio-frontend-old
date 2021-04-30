import React from "react";
import Concepts from "./Concepts.module.css";

const concepts = (props) => {
  return (
    <section>
      <h4 className="sidebar_heading">Core Competencies</h4>
      <h6 className="sidebar_subHeading">CONCEPTS</h6>
      <div className="grid_2col_autoRow">{props.concepts}</div>
    </section>
  );
};

export default concepts;
