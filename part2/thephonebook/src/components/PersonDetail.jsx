import React from "react";

const PersonDetail = (props) => {
  const { person, deleteName } = props;
  return (
    <div>
      <p>
        {person.name} {person.number}
        ff{person.id}ff
      </p>
      <button onClick={() => deleteName(person)}>delete</button>
    </div>
  );
};

export default PersonDetail;
