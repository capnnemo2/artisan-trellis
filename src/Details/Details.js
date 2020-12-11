import React from "react";
import "./Details.css";

// TODO add an onclick handler to the alt products -> highlights selected alt anddisplays alt name and dimensions below

function Details({ p_name, p_code, p_dimensions, p_alts }) {
  return (
    <div className="Details">
      <div>
        <p className="p-details-name">{p_name}</p>
        <p className="p-details-dimensions">Product Code: {p_code}</p>
        <p className="p-details-code">Dimensions: {p_dimensions}</p>
      </div>
      <div className="alt-prods">
        <p>Similar Products</p>
        <ul>
          {p_alts.map((p, i) => (
            <li key={i}>{p.code}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
