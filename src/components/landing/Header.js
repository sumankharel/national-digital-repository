import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  return (
    <header>
      <span>National Digital Repository</span>
      <div className="routes">
        <Link to="/">Home</Link>
        <Link to="/upload-thesis">Upload Thesis</Link>
      </div>
    </header>
  );
};

export default Header;
