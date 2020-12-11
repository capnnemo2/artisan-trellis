import React from "react";
import ReactTooltip from "react-tooltip";
import "./Scene2.css";

export default function Scene2({ getProductInfo }) {
  return (
    <div className="Scene2">
      <div className="scene2-img">
        <div
          className="item small-g"
          data-tip="Small Globe"
          onClick={(e) => {
            e.preventDefault();
            getProductInfo(0);
          }}
        ></div>
        <ReactTooltip place="top" type="dark" effect="solid" />
      </div>
    </div>
  );
}
