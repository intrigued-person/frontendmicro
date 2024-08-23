import React from "react";
import "./stdd.css";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function StudentDash() {
  const name = sessionStorage.getItem("userName");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://freesvg.org/img/user-icon.png" alt="Logo" style={{ height: '40px' }} />
          </a>
          <p className="navbar-text text-white mx-3 my-auto">
            Welcome, {name}
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/layerform">
                  <i className="bi bi-house-fill me-2"></i> 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentlogin">
                  <i className="bi bi-box-arrow-right me-2"></i> <Logout/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default StudentDash;
