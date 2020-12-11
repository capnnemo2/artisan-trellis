import React, { useState } from "react";
import "./Site2.css";

import ReactTooltip from "react-tooltip";
import Details from "../Details/Details";

function Site2() {
  const [product, set_product] = useState(false);
  const [product_details, set_product_details] = useState({
    p_name: "",
    p_code: "",
    p_dimensions: "",
  });

  function handleClickProduct(name, code, dimensions) {
    if (name !== product_details.p_name) {
      set_product_details((prevState) => ({
        ...prevState,
        p_name: name,
        p_code: code,
        p_dimensions: dimensions,
      }));
      set_product(true);
    } else if (name === product_details.p_name) {
      set_product((product) => !product);
    }
  }

  return (
    <div className="Site2">
      <div
        className="embedded_product mg"
        data-tip="medium globe"
        onClick={(e) => {
          e.preventDefault();
          handleClickProduct("medium globe", "MG", "24 in x 12 in");
        }}
      ></div>
      <div
        className="spiral product"
        data-tip="spiral"
        onClick={(e) => {
          e.preventDefault();
          handleClickProduct("spiral", "SP", "54 in x 22 in");
        }}
      ></div>
      <div
        className="bft product"
        data-tip="butterfly trellis"
        onClick={(e) => {
          e.preventDefault();
          handleClickProduct("butterfly trellis", "BFT", "60 in x 32 in");
        }}
      ></div>
      {product ? (
        <div className="mutant_details">
          <Details
            m_name={product_details.p_name}
            m_trait={product_details.p_code}
            m_team={product_details.p_dimensions}
          />
        </div>
      ) : (
        ""
      )}
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}

export default Site2;
