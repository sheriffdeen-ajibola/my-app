import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="phone">
        <div className="div"></div>
        <div className="home-background">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
