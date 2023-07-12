import React, { Fragment } from "react";
import Navigation from "./components/navigation-component/Navigation";
import Header from "./components/header-component/Header";
import "./styles/myProject.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
    </Fragment>
  );
};

export default App;
