import React from "react";
import "./Site1.css";

import ReactTooltip from "react-tooltip";

function Site1() {
  return (
    <div className="Site1">
      <p>This is the first site/location</p>
      <p data-tip="Magneto">Magneto</p>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}
export default Site1;
