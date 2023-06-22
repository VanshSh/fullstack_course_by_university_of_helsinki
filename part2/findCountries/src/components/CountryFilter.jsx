import React from "react";

const CountryFilter = ({ searchChangeHandler }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      find countries
      <input
        type="text"
        onChange={searchChangeHandler}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default CountryFilter;
