import { useState } from "react";
import { WeatherCard } from "./components/weatherCard";
import { FormSearch } from "./components/formSearch";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(false);
  const [citySearch, setCityFound] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const city = e.target.WeatherInput.value;
    setCityFound(city);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=34e42438a543e6b8ca7f1dcbb03a3468`
    )
      .then((r) => r.json())
      .then((r) => setWeather(r))
      .catch((err) => setWeather("Error"));
  };

  return (
    <div className="App">
      <FormSearch onSubmit={onSubmit} />
      {weather ? <WeatherCard weather={weather} city={citySearch} /> : null}
    </div>
  );
}

export default App;
