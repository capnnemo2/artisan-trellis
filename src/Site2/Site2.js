import React from "react";
import "./Site2.css";

import ReactTooltip from "react-tooltip";

function Site2() {
  return (
    <div className="Site2">
      <div className="embedded_product mg" data-tip="medium globe"></div>
      <div className="spiral product" data-tip="spiral"></div>
      <div className="bft product" data-tip="butterfly trellis"></div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}

export default Site2;
