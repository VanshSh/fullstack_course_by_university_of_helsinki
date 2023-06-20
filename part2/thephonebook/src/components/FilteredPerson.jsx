import React from "react";
import PersonDetail from "./PersonDetail";

const FilteredPerson = (props) => {
  const { filteredPersonArr, deleteName } = props;

  return (
    <div>
      {filteredPersonArr.map((person) => {
        return (
          <div key={person.id}>
            <PersonDetail person={person} deleteName={deleteName} />
          </div>
        );
      })}
    </div>
  );
};

export default FilteredPerson;
