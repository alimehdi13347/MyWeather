import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const Weather = () => {
  const [weather, setWeather] = useState({
    city: "Chennai",
    temp: "30.29",
    tempMin: "29.55",
    tempMax: "31.24",
    humidity: "85",
    feelsLike: "35.67",
    weather: "Cloudy",
  });
  let upDateInfo = (newInfo) => {
    setWeather(newInfo);
  };
  return (
    <div>
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 drop-shadow-lg m-6"
        style={{ letterSpacing: "2px" }}
      >
        🌦️ WEATHER APP
      </h1>
      <SearchBox upDateInfo={upDateInfo} />
      <InfoBox info={weather} />
    </div>
  );
};

export default Weather;
