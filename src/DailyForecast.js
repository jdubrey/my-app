import React from "react";
import "./styles.css";

export default function DailyForecast(props) {
  function maximumTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minimumTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="DailyForecast">
      <ul>
        <li className="Weekday">{day()}</li>
        <img src={props.icon} className="DailyImg" alt="daily forecast"></img>
        <li>
          <span className="maximumTemp">{maximumTemp()}</span> |{" "}
          <span className="minimumTemp">{minimumTemp()}</span>
        </li>
      </ul>
    </div>
  );
}
