import React from "react";
import "./Details.css";

function Details({ p_name, p_code, p_dimensions }) {
  return (
    <div>
      <div className="Details">
        <p>{p_name}</p>
        <p>Dimensions: {p_code}</p>
        <p>Product Code: {p_dimensions}</p>
      </div>
      <div className="alt-prods">
        <ul>
          <li>
            <i>Similar products</i>
          </li>
          <li>sg</li>
          <li>lg</li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
