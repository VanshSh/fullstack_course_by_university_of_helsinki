import axios from "axios";

const getAllCountriesData = () => {
  const request = axios.get(
    "https://studies.cs.helsinki.fi/restcountries/api/all"
  );
  return request.then((response) => response.data);
};

const getSpecificCountryData = (country) => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
  );
  return request.then((response) => response);
};

export default {
  getAllCountriesData,
  getSpecificCountryData,
};
