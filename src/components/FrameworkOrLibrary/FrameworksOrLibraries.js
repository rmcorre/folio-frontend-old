import React from "react";
import FrameworkOrLibrary from "./FrameworkOrLibrary.module.css";

const frameworksOrLibraries = (props) => {
  const frameWorksOrLibraries = props.frameworksOrLibraries;

  return (
    <section>
      <h6 className="sidebar_subHeading">FRAMEWORKS / LIBRARIES</h6>
      <div className="grid_2col_autoRow">{frameWorksOrLibraries}</div>
    </section>
  );
};

export default frameworksOrLibraries;
