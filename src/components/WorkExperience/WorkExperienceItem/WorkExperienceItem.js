import React from "react";
import "./WorkExperienceItem.css";

const workExperienceItem = (props) => {
  const jobRole = props.jobRole.toUpperCase();
  const organization =
    props.organization + " | " + props.startDate + " - " + props.endDate;
  const summary = props.summary;

  const result = props.duties.split(";");
  const dutiesList = result.map((duty) => <div>{duty}</div>);

  return (
    <div className="workExperienceItem__wrapper">
      <h6 className="workExperienceItem__role">{jobRole}</h6>
      <div className="workExperienceItem__org">{organization}</div>
      <div className="workExperienceItem__summary">{summary}</div>
      {dutiesList}
    </div>
  );
};

export default workExperienceItem;
