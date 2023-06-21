import React, { useEffect, useState } from "react";
import services from "./services/countries";
import CountryFilter from "./components/CountryFilter";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);

  // Get all countries data
  function getAllCountries() {
    services.getAllCountriesData().then((response) => {
      setAllCountries(response);
    });
  }
  useEffect(() => {
    getAllCountries();
  }, []);
  console.log("😇 L-15 in App.jsx=> ", allCountries);
  return (
    <div>
      <CountryFilter />
    </div>
  );
};

export default App;
