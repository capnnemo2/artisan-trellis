import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        {/* <Link to="/">About</Link>
        <Link to="/">Catalogue</Link>
        <Link to="/">Contact</Link> */}
        <a href="http://www.artisantrellis.com/about">About</a>
        <a href="http://www.artisantrellis.com/all-products">Catalogue</a>
        <a href="http://www.artisantrellis.com/contact-us">Contact</a>
      </div>
    </div>
  );
}
