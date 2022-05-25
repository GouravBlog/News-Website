import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg   fixed-top "
        style={{ backgroundColor: "gray" }}
      >
        <div className="container-fluid">
          <Link
            exact
            className="navbar-brand"
            style={{ fontWeight: "bold", color: "white" }}
            to="/"
          >
            DNA
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
            <span className="navbar-toggler-icon" style={{ color: "white" }}>
              --
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
              <li className="nav-item ">
                <Link
                  exact
                  className="nav-link  "
                  aria-current="page"
                  to="/business"
                  style={{ color: "white" }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item text-dark color-dark">
                <Link
                  exact
                  active
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                  style={{ color: "white" }}
                >
                  Entertainment
                </Link>
              </li>

              <li className="nav-item text-dark color-dark">
                <Link
                  exact
                  active
                  className="nav-link"
                  aria-current="page"
                  to="/health"
                  style={{ color: "white" }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item text-dark color-dark">
                <Link
                  exact
                  active
                  className="nav-link"
                  aria-current="page"
                  to="/science"
                  style={{ color: "white" }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item text-dark color-dark">
                <Link
                  exact
                  active
                  className="nav-link"
                  aria-current="page"
                  to="/sports"
                  style={{ color: "white" }}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item text-dark color-dark">
                <Link
                  exact
                  active
                  className="nav-link"
                  aria-current="page"
                  to="/technology"
                  style={{ color: "white" }}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
