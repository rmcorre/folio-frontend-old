import React from "react";
import Tech from "./Tech.module.css";

const techs = (props) => {
  const techs = props.techs;

  return (
    <section>
      <h6 className="sidebar_subHeading">TECHNOLOGIES</h6>
      <div className="grid_2col_autoRow">{techs}</div>
    </section>
  );
};

export default techs;
