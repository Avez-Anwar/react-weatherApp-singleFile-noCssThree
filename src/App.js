import axios from "axios";
import React, { useState } from "react";

const API_KEY = "04794127ed8dd51b3f4b806399afef77";
function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response.data);
    setWeather(response.data);
  };

  return (
    <div>
      <SearchCity setCity={setCity} fetchWeather={fetchWeather} />
      <SearchWeather weather={weather} />
    </div>
  );
}
export default App;

function SearchCity(props) {
  return (
    <div>
      <form onSubmit={props.fetchWeather}>
        <input onChange={(e) => props.setCity(e.target.value)} />
        <button type="submit">sumbit</button>
      </form>
    </div>
  );
}

function SearchWeather(props) {
  return (
    <div>
      <h4>React weather information</h4>
      <h4>Wind: {props.weather?.wind.speed}</h4>
      <h4>City: {props.weather?.name},{props.weather?.sys.country}</h4>
      <h4>Temperature: {`${Math.floor(props.weather?.main.temp - 273)}°C`}</h4>
    </div>
  );
}
