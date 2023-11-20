import React, { useState } from "react";
import axios from "axios";
import ConvertTemp from "./ConvertTemp";
import ConvertDay from "./ConvertDay";
import WeeklyForecast from "./WeeklyForecast";
import "./styles.css";

export default function Search() {
  const [weather, setWeather] = useState({ Ready: false });
  const [pinpoint, setPinpoint] = useState(null);

  function weatherForecast(response) {
    console.log(response.data);
    setWeather({
      Ready: true,
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      City: response.data.name,
      Date: new Date(response.data.dt * 1000),
      Coordinates: response.data.coord,
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function newForecast(response) {
    setWeather({
      Ready: true,
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      City: response.data.name,
      Date: new Date(response.data.dt * 1000),
      Coordinates: response.data.coord,
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "dce053e8a205baf58237738242095099";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${pinpoint}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(newForecast);
  }

  function updateLocation(event) {
    setPinpoint(event.target.value);
  }
  if (weather.Ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit} id="city">
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="Search"
                onChange={updateLocation}
                placeholder="Type a city"
                style={{ width: "100%" }}
                id="start"
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                type="submit"
                value="Search"
                className="button"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </form>
        <h1>{weather.City}</h1>
        <h3>
          <ConvertDay date={weather.Date} />
        </h3>
        <div className="Forecast">
          <div className="row">
            <div className="col">
              <ConvertTemp
                fahrenheit={weather.Temperature}
                icon={weather.Icon}
              />
            </div>
            <div className="col todaydescription">
              <ul>
                <li className="Description">{weather.Description}</li>
                <li>
                  <span>Humidity: </span>
                  <span>{weather.Humidity}%</span>
                </li>
                <li>
                  <span>
                    Wind: <span>{Math.round(weather.Wind)} mph</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <WeeklyForecast
            coordinates={weather.Coordinates}
            icon={weather.Icon}
          />
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
