import React from "react";
import logo from "./logo.svg";
import "./index.css";
import "./App.css";

const Header = () => {
  const stylesImgReact = {
    height: "50px",
  };
  return (
    <div>
      <header className="header">
        <a href="./index.html">
          <img
            className="homeButtonStyle"
            src="../home.png"
            alt="icon logotip"
          />
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


