import React from "react";
import { Link } from "react-router-dom";

// I'm picturing an image of a doorway/hallway/obvious passageway

function Landing() {
  return (
    <div className="Landing">
      <h1>Artisan Trellis</h1>
      <p>Explore the Artisan Trellis product catalogue.</p>
      <p>Pardon the dust, construction is ongoing.</p>
      <Link to="/site1">Enter your passage</Link>
    </div>
  );
}
export default Landing;
