import React, { useState } from "react";
import "./convert.css";

export default function ConvertTemp(props) {
  let [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    let fahrenheit = props.fahrenheit;
    return (
      <div className="ConvertTemp">
        <img
          src={props.icon}
          className="DailyImg"
          alt="daily forecast image"
        ></img>{" "}
        <span className="Daily">{Math.round(fahrenheit)} </span>
        <span className="Convert" onClick={showCelsius}>
          °F | <a href="/"> °C </a>
        </span>
      </div>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * (5 / 9);
    return (
      <div className="ConvertTemp">
        <img
          src={props.icon}
          className="DailyImg"
          alt="daily forecast image"
        ></img>{" "}
        <span className="Daily">{Math.round(celsius)} </span>
        <span className="Convert" onClick={showFahrenheit}>
          <a href="/"> °F </a>| °C
        </span>
      </div>
    );
  }
}
