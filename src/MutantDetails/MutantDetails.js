import React from "react";
import "./MutantDetails.css";

function MutantDetails({ m_name, m_trait }) {
  return (
    <div className="MutantDetails">
      <p>{m_name}</p>
      <p>{m_trait}</p>
    </div>
  );
}

export default MutantDetails;
