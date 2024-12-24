import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require("axios");

export default function Temperature(props) {
  let location = props.location;
  const [temp, setTemp] = useState(0);

  async function getWeatherData() {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: props.lat,
            lon: props.lon,
            units: "imperial",
            appid: API_KEY,
          },
        }
      );
      const currentTemperature = Math.floor(response.data.main.temp);
      setTemp(currentTemperature);
      console.log("Temperature API Successfully Called.");
    } catch (error) {
      console.error("API ERROR: " + error);
    }
  }

  useEffect(() => {
    const tempInterval = setInterval(() => {
      getWeatherData();
    }, 5000);

    return () => clearInterval(tempInterval);
  });

  return (
    <div className="weather">
      <h1 className="weather-heading">
        It is currently {temp}° in {location}.
      </h1>
    </div>
  );
}
