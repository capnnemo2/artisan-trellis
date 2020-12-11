import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Details from "./Details/Details";
import Window from "./Window/Window";
import products from "./dummy_store";

// TODO footer isn't stickign to bottom properly

function App() {
  const [product, set_product] = useState(false);
  const [product_details, set_product_details] = useState({
    p_name: "",
    p_code: "",
    p_dimensions: "",
  });

  function getProductInfo(product_id) {
    const selected_product = products.filter((p) => p.id === product_id)[0];
    displayProductInfo(selected_product);
  }

  function displayProductInfo(selected_product) {
    if (selected_product.name !== product_details.p_name) {
      set_product_details((prevState) => ({
        ...prevState,
        p_name: selected_product.name,
        p_code: selected_product.code,
        p_dimensions: selected_product.dimensions,
      }));
      set_product(true);
    } else if (selected_product.name === product_details.p_name) {
      set_product((product) => !product);
    }
  }

  return (
    <div className="App">
      <Nav />
      {product ? (
        <div className="mutant_details">
          <Details
            p_name={product_details.p_name}
            p_code={product_details.p_code}
            p_dimensions={product_details.p_dimensions}
          />
        </div>
      ) : (
        ""
      )}
      <Window getProductInfo={getProductInfo} />
      <Footer />
    </div>
  );
}

export default App;
