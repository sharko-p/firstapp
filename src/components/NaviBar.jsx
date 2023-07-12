import React from "react";
import { NavLink } from "react-router-dom";
import "../myProject.css";

const Navibar = () => {
  return (
    <>
      <ul className="Navigation-list">
        <li>
          <NavLink to="/Component">Component</NavLink>
        </li>
        <li>
          <NavLink to="/Props">Props</NavLink>
        </li>
        <li>
          <NavLink to="/State">State</NavLink>
        </li>
        <li>
          <NavLink to="/LifeCycle">LifeCycle</NavLink>
        </li>
        <li>
          <NavLink to="/Events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/Fragments">Fragment</NavLink>
        </li>
        <li>
          <NavLink to="/Key">Key</NavLink>
        </li>
        <li>
          <NavLink to="/Refs">Refs</NavLink>
        </li>
        <li>
          <NavLink to="/ReactMemo">ReactMemo</NavLink>
        </li>
        <li>
          <NavLink to="/UseContext">UseContext</NavLink>
        </li>
        <li>
          <NavLink to="/UseMemo">UseMemo</NavLink>
        </li>
        <li>
          <NavLink to="/Router">Router</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navibar;
