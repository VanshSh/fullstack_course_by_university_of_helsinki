import React from "react";

const Total = (props) => {
  let totalNumber = 0;
  const [part1, part2, part3] = props.course.parts;
  totalNumber = part1.exercises + part2.exercises + part3.exercises;

  return <div>Number of exercises {totalNumber}</div>;
};

export default Total;
