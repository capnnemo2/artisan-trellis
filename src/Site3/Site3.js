import React from "react";
import "./Site3.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReactTooltip from "react-tooltip";

// TODO footer isnt sticky

export default function Site3() {
  return (
    <div className="Site3">
      <Nav />
      <div className="content-details">
        <ul>
          <li>alpha</li>
          <li>something</li>
          <li>omega</li>
        </ul>
      </div>
      <div className="product-nav">
        <ul>
          <li>rock garden</li>
          <li>zen garden</li>
          <li>hippy garden</li>
        </ul>
      </div>
      <div className="content-window">
        <h2>content</h2>
        <p>
          this is a lot of content so that the grid will work better, maybe,
          hopefully
        </p>
        <p>Here is some more content</p>
        <p>Here is some more content</p>
        <p>Here is some more content</p>
        <p>Here is some more content</p>
        <p>Here is some more content</p>
      </div>
      <Footer />
    </div>
  );
}
