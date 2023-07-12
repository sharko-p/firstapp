import React from "react";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.png";
import "../../styles/index.css";
import "../../styles/App.css";

const Header = () => {
  const stylesImgReact = {
    height: "50px",
  };
  return (
    <div>
      <header className="header">
        <a href="index.html">
          <img className="homeButtonStyle" src={home} alt="buttonHome" />
        </a>
        <div>
          {" "}
          <img
            style={stylesImgReact}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
