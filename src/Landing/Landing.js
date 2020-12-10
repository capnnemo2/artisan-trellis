import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

// if we don't go the route of fully immersive, this page serves no purpose
// if we go with a more Houzz-like approach, the home page would just be the normal page already loaded up

function Landing() {
  return (
    <div className="Landing">
      <div className="blurb">
        <h1>Artisan Trellis</h1>
        <Link to="/site1">Enter ---&gt;</Link>
        <br />
        <Link to="/site3">Houzz Window</Link>
      </div>
    </div>
  );
}
export default Landing;
