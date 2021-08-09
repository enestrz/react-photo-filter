import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Enes Terzi
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <i className="bi bi-house"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/photo-filter" className="nav-link">
                <i className="bi bi-camera"></i> Photo Filter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
