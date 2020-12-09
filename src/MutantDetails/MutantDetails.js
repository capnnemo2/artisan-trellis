import React from "react";
import "./MutantDetails.css";

function MutantDetails({ m_name, m_trait, m_team }) {
  return (
    <div>
      <div className="MutantDetails">
        <p>{m_name}</p>
        <p>Dimensions: {m_team}</p>
        <p>Product Code: {m_trait}</p>
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

export default MutantDetails;
