import React, { useState, useEffect } from "react";
import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const id = "1521894";
    axios
      .get(`https://weatherapi.mtrew.now.sh/api/getweather?id=${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h2>Weather</h2>
      <MainPage data={data} />
    </div>
  );
}

export default App;
