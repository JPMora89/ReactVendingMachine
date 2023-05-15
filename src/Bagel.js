import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import { NavLink } from "react-router-dom";
// import "./Bagel.css";

function Bagel() {
  return (
    <div>
      <h1>NOM NOM NOM, WHERE'S THE SPREAD!?</h1>
      <img
        src="https://media.giphy.com/media/3o6EhPLCD5wlOu6A7e/giphy.gif"
        alt="Pair of bagels"
      />
      <p>So tasty!</p>
     <div className="GoBackButton"> 
      <NavLink exact to="/">
        Go Back
            </NavLink>
        </div>
    </div>
  );
}

export default Bagel;
