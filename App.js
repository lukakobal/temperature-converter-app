import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C"); // začetna izbira: Celsius
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (unit === "C") {
      const fahrenheit = (temperature * 9) / 5 + 32;
      setResult(`${fahrenheit.toFixed(2)} °F`);
    } else {
      const celsius = ((temperature - 32) * 5) / 9;
      setResult(`${celsius.toFixed(2)} °C`);
    }
  };

  return (
    <div className="container">
      <h1>🌡️ Temperature Converter</h1>

      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
      />

      <div className="unit-select">
        <label>
          <input
            type="radio"
            value="C"
            checked={unit === "C"}
            onChange={() => setUnit("C")}
          />
          Celsius (°C)
        </label>

        <label>
          <input
            type="radio"
            value="F"
            checked={unit === "F"}
            onChange={() => setUnit("F")}
          />
          Fahrenheit (°F)
        </label>
      </div>

      <button onClick={convertTemperature}>Convert</button>

      <p className="result">{result}</p>
    </div>
  );
}
