import React from "react";
import Summary from "./Summary.module.css";

const summary = (props) => {
  const summary = props.summary.summary;

  return (
    <section>
      <h4 className="sidebar_heading">About Me</h4>
      <p className={Summary.body}>{summary}</p>
    </section>
  );
};

export default summary;
