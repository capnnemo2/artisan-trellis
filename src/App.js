import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Details from "./Details/Details";
import Window from "./Window/Window";

// TODO footer isn't stickign to bottom properly

function App() {
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
      <Window handleClickProduct={handleClickProduct} />
      <Footer />
    </div>
  );
}

export default App;
