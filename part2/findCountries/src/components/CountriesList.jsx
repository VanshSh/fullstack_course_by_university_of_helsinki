import React, { useState } from "react";
import CountryDetails from "./Loading/CountryDetails";

const CountriesList = ({ countryList, allData }) => {
  const [countryStates, setCountryStates] = useState(
    countryList.reduce((acc, country) => {
      acc[country] = false;
      return acc;
    }, {})
  );

  const toggleShow = (country) => {
    setCountryStates((prevState) => ({
      ...prevState,
      [country]: !prevState[country],
    }));
  };
  return (
    <div>
      {countryList.map((country) => {
        return (
          <div key={country} style={{ marginBottom: ".5rem" }}>
            <span style={{ marginRight: "5px" }}>{country}</span>
            <button onClick={() => toggleShow(country)}>
              {countryStates[country] ? "Hide" : "Show"}
            </button>
            {countryStates[country] && (
              <CountryDetails searchedCountry={[country]} allData={allData} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
