import Wrapper from "./Wrapper";

const Home = ({ onChange, onKeyPress, query, result }) => {
  console.log({ query, result });
  return (
    <Wrapper>
      <div className="logo">
        <p>WeatherLens</p>
      </div>
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
        <div className="form">
          <div className="text-box">
            <input
              type="text"
              placeholder="Enter city name"
              onChange={onChange}
              value={query}
              onKeyPress={onKeyPress}
            />
          </div>
          <div className="btn">Get Device Location</div>
          {/* <input type="button" className="btn" value="Get Device Location" /> */}
          {/* {result ? <p>{result.main}</p> : <p>loading result</p>} */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
