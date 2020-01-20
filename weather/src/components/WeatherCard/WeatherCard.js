import React from "react";

function WeatherCard(props) {
  const { forcast } = props;

  const formatTemp = temp => {
    let degrees = (temp * 9) / 5 + 32;
    let degreesFormatted = degrees.toFixed(1);
    return degreesFormatted;
  };

  return (
    <div>
      {forcast &&
        forcast.map(day => {
          return (
            <div>
              <p>Date: {day.applicable_date}</p>
              <p>High: {formatTemp(day.max_temp)}°F</p>
              <p>Low: {formatTemp(day.min_temp)}°F</p>
              <p>Humidity: {day.humidity}%</p>
              <p>Conditions: {day.weather_state_name}</p>
              <p>
                {day.wind_direction_compass} at {day.wind_speed} kmh{" "}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default WeatherCard;
