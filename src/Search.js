import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [location, setLocation] = useState(null);
  let [forecast, setForecast] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumididty] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "dce053e8a205baf58237738242095099";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  function displayForecast(response) {
    setForecast(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumididty(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
  }

  if (city === null) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            onChange={updateLocation}
            placeholder="Type a city"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            onChange={updateLocation}
            placeholder="Type a city"
          />
          <input type="submit" value="Search" />
        </form>
        <h2>The {city} Forecast: </h2>
        <ul>
          <li>Temperature: {Math.round(forecast)}℉</li>
          <li className="Description">Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)} mph</li>
          <li></li>
        </ul>
        <br />
        <p>
          Open source app <a href="https://github.com/jdubrey/my-app">coded</a>{" "}
          by Jessica Dubrey
        </p>
      </div>
    );
  }
}
