import React from "react";

const Part = (props) => {
  const { item, index } = props;
  return (
    <p>
      {item.name} {item.exercises}
    </p>
  );
};

export default Part;
