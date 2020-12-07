import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing">
      <div className="blurb">
        <h1>Artisan Trellis</h1>
        <p>Explore the Artisan Trellis product catalogue.</p>
        <p>Pardon the dust, construction is ongoing.</p>
        <Link to="/site1">Enter ---&gt;</Link>
      </div>
    </div>
  );
}
export default Landing;
