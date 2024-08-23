import React from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../utils/sessionUtils"; // Import the utility function

function Logout1() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearSession(); // Clear session storage
    navigate("/stafflogin", { replace: true }); // Redirect to login page
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout1;