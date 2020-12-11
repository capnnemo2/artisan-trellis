import React from "react";
import ReactTooltip from "react-tooltip";
import "./Scene1.css";

export default function Scene1({ getProductInfo }) {
  return (
    <div className="Scene1">
      <div className="scene1-img">
        <div
          className="item med-g"
          data-tip="Medium Globe"
          onClick={(e) => {
            e.preventDefault();
            getProductInfo(1);
          }}
        ></div>
        <ReactTooltip place="top" type="dark" effect="solid" />
      </div>
    </div>
  );
}
