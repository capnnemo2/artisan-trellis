import React from "react";
import "./Site1.css";

import ReactTooltip from "react-tooltip";

function Site1() {
  return (
    <div className="Site1">
      <p className="villain magneto" data-tip="Magneto"></p>
      <p className="villain juggernaut" data-tip="Juggernaut"></p>
      <p className="villain cyclops" data-tip="Cyclops"></p>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}
export default Site1;
