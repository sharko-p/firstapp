import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/myProject.css";
import { navlinkForMap } from "../../routes/routes";

const Navibar = () => {
  return (
    <>
      <ul className="Navigation-list">
        {navlinkForMap.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>
              {link.path.split("").map((item) => (item === "/" ? "" : item))}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navibar;
