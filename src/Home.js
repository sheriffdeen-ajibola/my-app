import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

const Home = () => {
  const [city, setCity] = useState("lagos");
  const [weather, setWeather] = useState("lagos");

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=07852dd92542c49b2947f696b27f0fee`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWeather(data);
          setCity("");
          console.log(data);
        });
    }
  };

  useEffect(() => search(), []);

  return (
    <Wrapper>
      <div className="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="-90 -7 120 30"
          stroke="white"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 15h16M4 19h12"
          />
        </svg>
        <h3>The only weather forecast application you need.</h3>
        <div className="info-text">
          <p></p>
        </div>
        <form>
          <div className="text-box">
            <input
              type="text"
              placeholder="Enter city name"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              onKeyPress={search}
            />
          </div>

          <input
            type="button"
            className="btn"
            value="Get Device Location"
            onClick={search}
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default Home;
