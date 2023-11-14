import React, { useState } from "react";
import ".src/search.css";
import axios from "axios";
import ConvertTemp from "./ConvertTemp";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumididty] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [pinpoint, setPinpoint] = useState(null);

  function weatherForecast(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumididty(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
    setReady(true);
  }

  function newForecast(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumididty(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
  }

  function handleSubmit() {
    event.preventDefault();
    let apiKey = "dce053e8a205baf58237738242095099";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${pinpoint}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(newForecast);
  }

  function updateLocation(event) {
    setPinpoint(event.target.value);
  }
  if (ready) {
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
        <h1>{city}</h1>
        <div className="Forecast">
          <div className="row">
            <div className="col-6">
              {" "}
              <span className="Daily">{Math.round(temperature)} </span>
              <ConvertTemp />
            </div>
            <div className="col-6">
              <ul>
                <li className="Description">{description}</li>
                <li>
                  <span>Humidity: </span>
                  <span>{humidity}%</span>
                </li>
                <li>
                  <span>
                    Wind: <span>{Math.round(wind)} mph</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dce053e8a205baf58237738242095099";
    let location = "Miami";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(weatherForecast);

    return "loading...";
  }
}
