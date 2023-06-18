import React from "react";
import PersonDetail from "./PersonDetail";

const FilteredPerson = (props) => {
  const { filteredPersonArr } = props;

  return (
    <div>
      {filteredPersonArr.map((person) => {
        return (
          <div key={person.name}>
            <PersonDetail person={person} />
          </div>
        );
      })}
    </div>
  );
};

export default FilteredPerson;
