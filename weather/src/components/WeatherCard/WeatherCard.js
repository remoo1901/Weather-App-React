import React from "react";
import "./WeatherCard.scss";

function WeatherCard(props) {
  const { forcast } = props;

  const formatTemp = temp => {
    let degrees = (temp * 9) / 5 + 32;
    let degreesFormatted = degrees.toFixed(1);
    return degreesFormatted;
  };

  return (
    <div className="weather-container">
      {forcast && (
        <div className="current-conditions">
          <h2>Current Conditions</h2>
          <p>Current Temp: {formatTemp(forcast[0].the_temp)} °F</p>
          <p>Current Windspeed: {forcast[0].wind_speed.toFixed(2)} mph</p>
        </div>
      )}
      <div className="forcast">
        {forcast &&
          forcast.map(day => {
            return (
              <div className="day">
                <p>Date: {day.applicable_date.slice(6)}</p>
                <p>High: {formatTemp(day.max_temp)}°F</p>
                <p>Low: {formatTemp(day.min_temp)}°F</p>
                <p>Humidity: {day.humidity}%</p>
                <p>
                  Expected Conditions: {day.weather_state_name}
                </p>
                <img
                  className="weatherImage"
                  src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt=""
                />
                <p>
                  {day.wind_direction_compass} at {day.wind_speed.toFixed(2)}{" "}
                  mph
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WeatherCard;
