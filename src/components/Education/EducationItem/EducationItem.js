import React from "react";
import "./EducationItem.css";

const education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const country = props.country;

  return (
    <div className="educationItem__wrapper">
      <h6 className="educationItem__course">{course.toUpperCase()}</h6>
      <div className="educationItem__institution">
        {institution + " | " + startDate + " - " + endDate}
      </div>
      <div>{country}</div>
    </div>
  );
};

export default education;
