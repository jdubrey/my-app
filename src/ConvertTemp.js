import React, { useState } from "react";
import "./convert.css";

export default function ConvertTemp() {
  let [unit, setUnit] = useState("fahrenheit");
  const [temperature] = useState(null);
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    let celsius = (temperature - 32) * (5 / 9);
    return (
      <div className="ConvertTemp">
        <span className="Daily">{Math.round(celsius)} </span>
        <span className="Convert" onClick={showCelsius}>
          °F| <a href="/"> °C </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ConvertTemp">
        <span className="Daily">{Math.round(temperature)} </span>
        <span className="Convert" onClick={showFahrenheit}>
          <a href="/"> °F </a>| °C
        </span>
      </div>
    );
  }
}
