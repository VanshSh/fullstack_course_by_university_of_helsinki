import React, { useEffect, useState } from "react";

const CountryDetails = ({ searchedCountry, allData }) => {
  const [weatherInfo, setWeather] = useState({});
  const [Loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(null);
  const specificCountry = allData.filter((country) => {
    return (
      country.name.common.toLowerCase() === searchedCountry[0].toLowerCase()
    );
  });
  const commonName = specificCountry[0].name.common;
  const capital = specificCountry[0].capital[0];
  const languages = specificCountry[0].languages;
  const languagesArray = Object.values(languages);
  const area = specificCountry[0].area;
  const flag = specificCountry[0].flags.png;

  // Weather Information
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  // const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${commonName}&appid=${API_KEY}`;

  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  async function getWeather() {
    setLoading(true);
    let response = await fetch(WEATHER_URL, {
      method: "GET",
      headers: headersList,
    });
    const data = await response.json();
    const icon = data.weather[0].icon;
    setIcon(icon);
    setWeather(data);

    setLoading(false);
  }

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div>
      <h1>{commonName}</h1>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h3>languages:</h3>
      <ul>
        {languagesArray.map((lang) => {
          return <li key={lang}>{lang}</li>;
        })}
      </ul>
      <img src={flag} alt={commonName} />

      <h3>Weather in Helsinki</h3>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>temperature {weatherInfo?.main?.temp} Celcius</p>

          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={icon}
          />
          <p>wind {weatherInfo?.wind?.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
