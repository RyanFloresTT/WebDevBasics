import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require("axios");

export default function WeatherMonth(props) {
  //30 Day Weather Forecast Data
  const [forecastData, setforecastData] = useState([]);
  async function getMonthlyWeatherData() {
    try {
      const response = await axios.get(
        "https://pro.openweathermap.org/data/2.5/forecast/climate",
        {
          params: {
            lat: props.lat,
            lon: props.lon,
            units: "imperial",
            appid: API_KEY,
          },
        }
      );
      var responseData = response.data.list.slice(0);
      setforecastData(responseData);
      console.log("Weather Forecast API Successfully Called.");
    } catch (error) {
      console.error("API ERROR: " + error);
    }
  }

  useEffect(() => {
    const tempInterval = setInterval(() => {
      getMonthlyWeatherData();
    }, 5000);

    return () => clearInterval(tempInterval);
  });

  return (
    <div className="weather-card-group">
      {forecastData.map((data, index) => {
        return (
          <WeatherCard
            key={index}
            id={index}
            temperature={data.deg}
            time={data.dt}
          />
        );
      })}
    </div>
  );
}
