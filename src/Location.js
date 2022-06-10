const Location = (data) => {
  const dateConstructor = (d) => {
    let months = [
      "January",
      "february",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="wrapper">
      <div className="phone">
        <div className="div"></div>
        <div className="app-background">
          <div className="logo">
            <p>WeatherLens</p>
          </div>
          <section className="upper-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="-95 -3 120 30"
              stroke="white"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 15h16M4 19h12"
              />
            </svg>
            <div className="location">
              <h2>{data.name}</h2>
              <div className="date">{dateConstructor(new Date())}</div>
            </div>
            <div className="weather-value">
              <h1>
                20 <span>&#176;</span>
              </h1>

              <div className="weather-condition">
                <i className="fa-solid fa-cloud-showers-heavy"></i>Raining
              </div>
            </div>
          </section>
          <section className="lower-section">
            <div className="lower-section-wind">
              <p>Wind</p>
              <div className="wind value">
                53 <br /> <span> km/h </span>
              </div>
            </div>
            <div className="lower-section-rain">
              <p>Rain</p>
              <div className="rain value">
                70 <br /> <span> % </span>
              </div>
            </div>
            <div className="lower-section-humidity">
              <p>Humidity</p>
              <div className="humidity value">
                92 <br /> <span> % </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Location;
