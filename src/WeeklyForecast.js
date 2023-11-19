import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeeklyForecast">
        <div className="row">
          <div className="col">
            <DailyForecast data={forecast[1]} icon={props.icon} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[2]} icon={props.icon} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[3]} icon={props.icon} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[4]} icon={props.icon} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[5]} icon={props.icon} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecast);
  }
}
