// src/pages/studentLogin/Logout.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../utils/sessionUtils"; // Import the utility function

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearSession(); // Clear session storage
    navigate("/studentlogin", { replace: true }); // Redirect to login page
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
