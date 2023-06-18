import React from "react";
import PersonDetail from "./PersonDetail";

const FilteredPerson = (props) => {
  const { filteredPersonArr } = props;

  return (
    <div>
      {filteredPersonArr.map((person) => {
        return (
          <div>
            <PersonDetail key={person.name} person={person} />
          </div>
        );
      })}
    </div>
  );
};

export default FilteredPerson;
