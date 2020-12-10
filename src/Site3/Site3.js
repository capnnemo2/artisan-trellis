import React, { useState } from "react";
import "./Site3.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReactTooltip from "react-tooltip";
import MutantDetails from "../MutantDetails/MutantDetails";

// TODO footer isnt sticky
// TODO if Noah likes this setup (which I think is better for what I'm able to currently do) then this file should be App.js and the content window would be the switch routes

export default function Site3() {
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
    <div className="Site3">
      <Nav />
      <div className="content-details">
        <div>
          {product ? (
            <div className="mutant_details">
              <MutantDetails
                m_name={product_details.p_name}
                m_trait={product_details.p_code}
                m_team={product_details.p_dimensions}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="product-nav">
        <div></div>
      </div>
      <div className="content-window">
        <div className="content-window-img">
          <div
            className="embedded_product med-g"
            data-tip="Medium Globe"
            onClick={(e) => {
              e.preventDefault();
              handleClickProduct("Medium Globe", "MG", "24in x 12in");
            }}
          ></div>
          <ReactTooltip place="top" type="dark" effect="solid" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
