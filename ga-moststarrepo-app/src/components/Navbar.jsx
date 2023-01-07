import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        textDecoration: "underline",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <Link to="/">
        <h1>ALL</h1>
      </Link>
      <Link to="/html">
        <h1>HTML</h1>
      </Link>
      <Link to="/css">
        <h1>CSS</h1>
      </Link>
      <Link to="/javascript">
        <h1>JAVASCRIPT</h1>
      </Link>
    </div>
  );
};

export default Navbar;
