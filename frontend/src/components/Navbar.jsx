import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
