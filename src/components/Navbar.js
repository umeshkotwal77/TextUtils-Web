// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Navbar Component
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/textutils">
        TextUtils
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/textform">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>

        <form className="form-inline my-2 my-lg-0">
          {isLoggedIn && (
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
