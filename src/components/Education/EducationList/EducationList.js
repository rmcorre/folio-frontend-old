import React from "react";
import "./EducationList.css";

const educationList = (props) => {
  const educationItems = props.educationItems;

  return (
    <div className="educationList__wrapper">
      <h4 className="educationList__heading">Educational Background</h4>
      {educationItems}
    </div>
  );
};

export default educationList;
