import React from "react";
import "../styles/Menu.css";
import { BrowserRouter, Link } from "react-router-dom";

const Menu = ({ select, setSelect }) => {
  function handleSelect(selection) {
    setSelect(selection);
  }

  const selectionStyle = {
    borderBottom: "4px solid blue",
    borderRadius: "4px",
  };

  return (
    <nav className="navbar">
      <BrowserRouter>
        <Link
          onClick={() => handleSelect("All")}
          className="navItem"
          style={select === "All" ? selectionStyle : {}}
        >
          All
        </Link>
        <Link
          onClick={() => handleSelect("Active")}
          className="navItem"
          style={select === "Active" ? selectionStyle : {}}
        >
          Active
        </Link>
        <Link
          onClick={() => handleSelect("Completed")}
          className="navItem"
          style={select === "Completed" ? selectionStyle : {}}
        >
          Completed
        </Link>
      </BrowserRouter>
    </nav>
  );
};

export default Menu;
