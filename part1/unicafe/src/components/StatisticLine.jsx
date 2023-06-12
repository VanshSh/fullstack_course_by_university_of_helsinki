import React from "react";

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

export default StatisticLine;
