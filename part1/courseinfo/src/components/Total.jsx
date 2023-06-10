import React from "react";

const Total = (props) => {
  const { totalExercises } = props;
  let totalNumber = 0;
  const total = totalExercises.map((item) => {
    return (totalNumber += item.exercises);
  });

  return <div>Number of exercises {totalNumber}</div>;
};

export default Total;
