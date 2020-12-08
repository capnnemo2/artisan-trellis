import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing">
      <div className="blurb">
        <h1>Artisan Trellis</h1>
        <Link to="/site1">Enter ---&gt;</Link>
      </div>
    </div>
  );
}
export default Landing;
