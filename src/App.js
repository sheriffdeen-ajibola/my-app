import React, { useState } from "react";

import "./App.css";
import Home from "./Home";
import Location from "./Location";

const api = {
  key: "07852dd92542c49b2947f696b27f0fee",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          console.log(data);
        });
    }
  };

  return (
    <div className="App">
      <Home
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
        query={query}
      />
      <Location data={this.data} />
    </div>
  );
}

export default App;
