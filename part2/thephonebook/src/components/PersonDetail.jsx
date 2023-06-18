import React from "react";

const PersonDetail = (props) => {
  const { person } = props;
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

export default PersonDetail;
