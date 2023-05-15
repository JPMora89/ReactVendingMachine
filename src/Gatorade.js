import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import { NavLink } from "react-router-dom";

function Gatorade() {
  return (
    <div>
      <h1>SO REFRESHING, Cool BLUE!!</h1>
      <img
        src="https://media.giphy.com/media/UTHG8tO6Y6TsSYFrpK/giphy.gif"
        alt="ManCity Gatorade."
      />
      <div className="GoBackButton">
      <NavLink exact to="/">
        Go Back
      
            </NavLink>
        </div>
    </div>
  );
}

export default Gatorade;
