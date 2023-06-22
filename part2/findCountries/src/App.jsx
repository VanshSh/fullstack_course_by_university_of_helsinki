import React, { useEffect, useState } from "react";
import services from "./services/countries";
import CountryFilter from "./components/CountryFilter";
import Loading from "./components/Loading/Loading";
import CountryDetails from "./components/Loading/CountryDetails";
import CountriesList from "./components/CountriesList";

const App = () => {
  const [allCountriesName, setAllCountriesName] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterWord, setFilterWord] = useState("");

  // 🎉 Get all countries  data 🎉
  function getAllCountries() {
    setIsLoading(true);
    services.getAllCountriesData().then((response) => {
      const countriesName = response.map((country) => country.name.common);
      setAllCountriesName(countriesName);
      setAllCountriesData(response);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getAllCountries();
  }, []);

  // 🎉 Filter countries all functionalities 🎉

  // Search Change Handler
  const searchChangeHandler = (event) => {
    setFilterWord(event.target.value);
  };

  // Filter countries
  const filteredCountries = allCountriesName.filter((country) => {
    return country.toLowerCase().includes(filterWord.toLowerCase());
  });

  const showFilteredData =
    filteredCountries.length > 10 ? (
      "Too many matches, specify another filter"
    ) : filteredCountries.length === 1 ? (
      <CountryDetails
        allData={allCountriesData}
        searchedCountry={filteredCountries}
      />
    ) : (
      <CountriesList
        countryList={filteredCountries}
        allData={allCountriesData}
      />
    );
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <CountryFilter searchChangeHandler={searchChangeHandler} />
          {showFilteredData}
        </div>
      )}
    </div>
  );
};

export default App;
