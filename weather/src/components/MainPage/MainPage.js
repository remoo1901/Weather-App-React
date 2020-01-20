import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

function MainPage(props) {
  const { data } = props;
  return (
    <div>
      {data.parent && (
        <h1>
          Weather for {data.title},{data.parent.title}
          {""}
        </h1>
      )}
      
      <WeatherCard data={data} forcast={data.consolidated_weather} />
    </div>
  );
}

export default MainPage;

/*
const { data } = props;

{data.parent && (
    <h1>
      Weather for {data.title},{data.parent.title}
      {""}
    </h1>
  )}  */
