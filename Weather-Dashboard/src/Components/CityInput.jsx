import { useState } from "react";
import Temperature from "./Temperature";
import WeatherMonth from "./WeatherMonth.jsx";
const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require("axios");

export default function CityInput() {
  let lat = 0;
  let lon = 0;
  const [cityName, setCityName] = useState("");

  const onChangeHandler = (event) => {
    setCityName(event.target.value);
    event.preventDefault();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    getGeoLocation();
  };

  async function getGeoLocation() {
    try {
      const response = await axios.get(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          cityName +
          "&limit=1&appid=" +
          API_KEY
        //{ params: { q: { cityName }, limit: 1, appid: API_KEY } }
      );
      lat = response.data[0].lat;
      lon = response.data[0].lon;
      console.log("Geolocation API Successfully Called.");
    } catch (error) {
      console.error("API ERROR: " + error);
    }
  }

  return (
    <div className="city-input">
      <form className="city-input-form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={cityName}
        />
        <input type="submit" name="submitCity" />
      </form>
      <Temperature lat={lat} lon={lon} location={cityName} />
      <WeatherMonth lat={lat} lon={lon} location={cityName} />
    </div>
  );
}
