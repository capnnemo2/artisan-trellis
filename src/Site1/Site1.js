import React, { useState } from "react";
import "./Site1.css";

import ReactTooltip from "react-tooltip";
import MutantDetails from "../MutantDetails/MutantDetails";

function Site1() {
  const [mutant_details, set_mutant_details] = useState(false);
  const [mutant, set_mutant] = useState({
    m_name: "",
    m_trait: "",
    m_team: "",
  });

  function handleMutantClick(name, trait, team) {
    if (name !== mutant.m_name) {
      set_mutant((prevState) => ({
        ...prevState,
        m_name: name,
        m_trait: trait,
        m_team: team,
      }));
      set_mutant_details(true);
    } else if (name === mutant.m_name) {
      set_mutant_details((mutant_details) => !mutant_details);
    }
  }

  return (
    <div className="Site1">
      <p
        className="mutant magneto"
        data-tip="Magneto"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("magneto", "brains", "supervillain");
        }}
      ></p>
      <p
        className="mutant juggernaut"
        data-tip="Juggernaut"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("juggernaut", "brawn", "supervillain");
        }}
      ></p>
      <p
        className="mutant cyclops"
        data-tip="Cyclops <br /> Sexy"
        data-multiline="true"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("cyclops", "brains", "superhero");
        }}
      ></p>
      {mutant_details ? (
        <div className="mutant_details">
          <MutantDetails
            m_name={mutant.m_name}
            m_trait={mutant.m_trait}
            m_team={mutant.m_team}
          />
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
