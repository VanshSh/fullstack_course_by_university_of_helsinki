import React from "react";

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <h3>total of {totalExercises}</h3>;
};

export default Total;
