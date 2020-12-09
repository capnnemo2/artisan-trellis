import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <nav>
        <label htmlFor="hamburger" className="ham-menu">
          &#9776;
        </label>
        <input type="checkbox" id="hamburger" />

        <div className="left-menu">
          <Link to="/site1">X-Men</Link>
          {"    "}
          <Link to="/site2">Full Screen</Link>
          {"    "}
          <Link to="/site3">Houzz Window</Link>
        </div>
        <Link to="/" className="logo">
          Home
        </Link>
      </nav>
    </div>
  );
}
