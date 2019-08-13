import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "lista TO DO", path: "/list" },
  { name: "czołgi", path: "/tank" },
  { name: "kontakt", path: "/admin" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
