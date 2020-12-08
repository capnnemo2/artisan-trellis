import React, { useState } from "react";
import "./Site1.css";

import ReactTooltip from "react-tooltip";

function Site1() {
  const [mutant_details, set_mutant_details] = useState(false);

  function handleMutantClick() {
    mutant_details ? set_mutant_details(false) : set_mutant_details(true);
  }

  return (
    <div className="Site1">
      <p
        className="mutant magneto"
        data-tip="Magneto<br />Villain<br />Brains"
        data-multiline="true"
        onClick={handleMutantClick}
      ></p>
      <p
        className="mutant juggernaut"
        data-tip="Juggernaut <br /> Villain <br /> Brawn"
        data-multiline="true"
        onClick={handleMutantClick}
      ></p>
      <p
        className="mutant cyclops"
        data-tip="Cyclops <br /> Hero <br /> Brains"
        data-multiline="true"
        onClick={handleMutantClick}
      ></p>
      {mutant_details ? (
        <div className="mutant_details">
          <p>MUTANT</p>
        </div>
      ) : (
        ""
      )}

      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}
export default Site1;
