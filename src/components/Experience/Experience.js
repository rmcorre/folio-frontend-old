import React from 'react';

const Experience = (props) => {
  const jobRole = props.jobRole;
  const organization = props.organization;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const date = startDate + ' - ' + endDate;
  const summary = props.summary;

  const result = props.duties.split(';');
  const dutiesList = result.map((duty, index) => <p key={index}>{duty}</p>);

  return (
    <div>
      <h6>{jobRole}</h6>
      <div>{organization}</div>
      <div className="date">{date}</div>
      <div className="summary">{summary}</div>
      <div className="duties">{dutiesList}</div>
      <hr />
    </div>
  );
};

export default Experience;
