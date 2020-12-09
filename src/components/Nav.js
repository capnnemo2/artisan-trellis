import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/site1">X-Men</Link>
      <Link to="/site2">Full Screen</Link>
      <Link to="/site3">Houzz Window</Link>
    </div>
  );
}
