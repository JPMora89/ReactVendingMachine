import React from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/gatorade">
        Gatorade
      </NavLink>
      <NavLink exact to="/pizza">
        Pizza
      </NavLink>
        <NavLink exact to="/bagel">
        Bagel
        </NavLink>
    </nav>
  );
}

export default NavBar;
