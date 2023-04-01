export const WeatherCard = ({ weather, city }) => {
  if (weather.cod === "404") {
    return (
      <div className="cardWeather">
        <p>City {city} not found 😢</p>
      </div>
    );
  }
  return (
    <div className="cardWeather">
      <p>{weather.name}</p>
      <p>Weather : {weather.weather[0].main}</p>
    </div>
  );
};
