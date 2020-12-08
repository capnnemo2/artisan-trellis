import React, { useState } from "react";
import "./Site1.css";

import ReactTooltip from "react-tooltip";
import MutantDetails from "../MutantDetails/MutantDetails";

// TODO combine state into single, combined line

function Site1() {
  const [mutant_details, set_mutant_details] = useState(false);
  //   const [[m_name, m_trait], [set_m_name, set_m_trait]] = useState("");
  const [m_name, set_m_name] = useState("");
  const [m_trait, set_m_trait] = useState("");

  function handleMutantClick(name, trait) {
    if (name !== m_name) {
      set_m_name(name);
      set_mutant_details(true);
    } else if (name === m_name) {
      mutant_details ? set_mutant_details(false) : set_mutant_details(true);
    }

    if (trait !== m_trait) {
      set_m_trait(trait);
    }
  }

  return (
    <div className="Site1">
      <p
        className="mutant magneto"
        data-tip="Magneto<br />Villain<br />Brains"
        data-multiline="true"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("magneto", "brains");
        }}
      ></p>
      <p
        className="mutant juggernaut"
        data-tip="Juggernaut <br /> Villain <br /> Brawn"
        data-multiline="true"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("juggernaut", "brawn");
        }}
      ></p>
      <p
        className="mutant cyclops"
        data-tip="Cyclops <br /> Hero <br /> Brains"
        data-multiline="true"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("cyclops", "brains");
        }}
      ></p>
      {mutant_details ? (
        <div className="mutant_details">
          <MutantDetails m_name={m_name} m_trait={m_trait} />
        </div>
      ) : (
        ""
      )}
      {/* <MutantDetails m_name={m_name} m_trait={m_trait} /> */}

      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}
export default Site1;
