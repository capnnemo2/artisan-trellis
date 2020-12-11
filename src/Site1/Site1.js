import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Site1.css";

import ReactTooltip from "react-tooltip";
import Details from "../Details/Details";

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
      <div
        className="mutant magneto"
        data-tip="Magneto"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("magneto", "brains", "supervillain");
        }}
      ></div>
      <div
        className="mutant juggernaut item"
        data-tip="Juggernaut"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("juggernaut", "brawn", "supervillain");
        }}
      ></div>
      <div
        className="mutant cyclops"
        data-tip="Cyclops <br /> Sexy"
        data-multiline="true"
        onClick={(e) => {
          e.preventDefault();
          handleMutantClick("cyclops", "brains", "superhero");
        }}
      ></div>
      {mutant_details ? (
        <div className="mutant_details">
          <Details
            m_name={mutant.m_name}
            m_trait={mutant.m_trait}
            m_team={mutant.m_team}
          />
        </div>
      ) : (
        ""
      )}
      <Link to="/site2">
        <div className="doorway" data-tip="doorway"></div>
        <ReactTooltip place="top" type="dark" effect="solid" />
      </Link>

      {/* <ReactTooltip place="top" type="dark" effect="solid" /> */}
    </div>
  );
}
export default Site1;
