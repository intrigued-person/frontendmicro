import React from "react";
import "./stdd.css";
import { Link } from "react-router-dom";

function StudentDashApplication() {
  const name = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <p style={{ color: "white", fontSize: "30px", marginTop: "20px" }}>
              Welcome {name}
            </p>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-md-auto gap-2">
                <li class="nav-item rounded">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/layerform"
                  >
                    <i class="bi bi-house-fill me-2"></i>Application Status
                  </a>
                </li>

                <li class="nav-item rounded">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/studentlogin"
                  >
                    <i class="bi bi-house-fill me-2"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StudentDashApplication;
