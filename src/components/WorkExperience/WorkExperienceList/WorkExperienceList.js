import React from "react";
import "./WorkExperienceList.css";

const workExperienceList = (props) => {
  const workExperienceItems = props.workExperienceItems;

  return (
    <div className="workExperienceList__wrapper">
      <h4 className="workExperienceList__heading">Work Experience</h4>
      {workExperienceItems}
    </div>
  );
};

export default workExperienceList;
