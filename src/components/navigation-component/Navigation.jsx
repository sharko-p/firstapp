import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../styles/myProject.css";
import Navibar from "./../naviBar-component/NaviBar";
import { publicRoutes } from "../../routes/routes";

const Navigation = () => {
  

  return (
    <>
      <Navibar />
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
