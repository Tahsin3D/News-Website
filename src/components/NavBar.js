import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/PageStyle.css";

const NavBar = (props) => {
  const location = useLocation();

  return (
    <nav
      style={{
        color: props.mode === "light" ? "black" : "#eeede7",
        backgroundColor: props.mode === "light" ? "#eeede7" : "#444444",
        boxShadow: props.mode === "light" ? "0px 1px 8px black" : "0px 1px 8px #eeede7",
      }}
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
    >
      <div className="container-fluid">
        <Link
          style={{
            color: props.mode === "light" ? "black" : "#eeede7",
            fontWeight: "400",
            marginLeft: "10px",
            marginRight: "60px",
          }}
          className="navbar-brand"
          to="/about"
        >
          NewsMonkey
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                General News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/business" ? "active" : ""}`}
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`}
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/health" ? "active" : ""}`}
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/science" ? "active" : ""}`}
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`}
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: props.mode === "light" ? "black" : "#eeede7" }}
                className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`}
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode[0].toUpperCase() + props.mode.slice(1)} Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;