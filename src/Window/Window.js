import React from "react";
import "./Window.css";
import ReactTooltip from "react-tooltip";

export default function Window({ handleClickProduct, getProductInfo }) {
  return (
    <div className="Window">
      <div className="content-window">
        <div className="content-window-img">
          <div
            className="embedded_product med-g"
            data-tip="Medium Globe"
            onClick={(e) => {
              e.preventDefault();
              // handleClickProduct("Medium Globe", "MG", "24in x 12in");
              getProductInfo(1);
            }}
          ></div>
          <ReactTooltip place="top" type="dark" effect="solid" />
        </div>
      </div>
    </div>
  );
}
