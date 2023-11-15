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
    let celsius = (props.fahrenheit - 32) * (5 / 9);
    return (
      <div className="ConvertTemp">
        <span className="Daily">{Math.round(celsius)} </span>
        <span className="Convert" onClick={showCelsius}>
          <a href="/"> °F </a>| °C
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.fahrenheit;
    return (
      <div className="ConvertTemp">
        <span className="Daily">{Math.round(fahrenheit)} </span>
        <span className="Convert" onClick={showFahrenheit}>
          °F | <a href="/"> °C </a>
        </span>
      </div>
    );
  }
}
