import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import { NavLink } from "react-router-dom";

function Pizza() {
  return (
    <div>
      <h1>NOM NOM NOM</h1>
      <img
        src="https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy-downsized-large.gif"
        alt="Doggo with pizza"
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

export default Pizza;
