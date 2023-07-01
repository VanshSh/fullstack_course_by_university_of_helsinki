import PersonDetail from "./PersonDetail";
import React from "react";


const FilteredPerson = (props) => {
  const { filteredPersonArr, deleteName } = props;

  return (
    <ul>
      {filteredPersonArr.map((person) => {
        return (
          <li key={person.id}>
            <PersonDetail person={person} deleteName={deleteName} />
          </li>
        );
      })}
    </ul>
  );
};

export default FilteredPerson;
