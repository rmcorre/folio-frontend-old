import React from 'react';

const Education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const country = props.country;
  const date = startDate + ' - ' + endDate;

  return (
    <div>
      <h6>{course}</h6>
      <div>{institution}</div>
      <div>{date}</div>
      <div>{country}</div>
      <hr />
    </div>
  );
};

export default Education;
