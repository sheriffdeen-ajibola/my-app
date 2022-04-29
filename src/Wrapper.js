const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="phone">
        <div className="div"></div>
        <div className="home-background">
          <div className="logo">
            <p>WeatherLens</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
