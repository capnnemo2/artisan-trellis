import React from "react";
import "./Details.css";

function Details({ p_name, p_code, p_dimensions }) {
  return (
    <div>
      <div className="Details">
        <p className="p-details-name">{p_name}</p>
        <p className="p-details-dimensions">Dimensions: {p_code}</p>
        <p className="p-details-code">Product Code: {p_dimensions}</p>
      </div>
      <div className="alt-prods">
        <p>Similar Products</p>
        <ul>
          <li>sg</li>
          <li>lg</li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
