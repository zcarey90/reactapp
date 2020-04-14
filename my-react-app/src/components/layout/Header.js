import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={chartStyle}>
      <h1>Chore Chart</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const chartStyle = {
  background: "black",
  color: "purple",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "blue",
  textDecoration: "none",
};

export default Header;
