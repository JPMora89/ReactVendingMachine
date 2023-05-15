import React from "react";
import { NavLink } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>I'M HUNGRY</h1>
    <p>Let's get some food!</p>

      <img
        src="https://freesvg.org/img/publicdomainq-0000701gzfoom.png"
        alt="Vending Machine"
      />
        <div>
            <ul> Vending Machine Menu
            <li>
            <NavLink exact to="/gatorade">
                Gatorade
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/pizza">
                Pizza
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/bagel">
                Bagel
            </NavLink>
        </li>
        </ul>
        </div>
        

    </div>
  );
}

export default Home;
