import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../Studedash/Logout";
import Logout1 from "../../Admin/Logout1";

function StaffDashBoard() {
  const staffName = sessionStorage.getItem("staffName");
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <p style={{ color: "white", fontSize: "30px", marginTop: "20px" }}>
              Welcome {staffName}
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
                <Link to='/Applicationrequest' class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-house-fill me-2"></i>Applications
                </Link>
              </li>
             
              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="/stafflogin">
                  <i class="bi bi-house-fill me-2"></i><Logout1/>
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default StaffDashBoard;
