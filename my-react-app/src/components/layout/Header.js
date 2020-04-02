import React from "react";

function Header() {
  return (
    <header style={chartStyle}>
      <h1>ChoreChart</h1>
    </header>
  );
}

const chartStyle = {
  background: "black",
  color: "purple",
  textAlign: "center",
  padding: "10px"
};

export default Header;
