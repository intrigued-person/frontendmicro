import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './Viewuser.css'; // Import custom CSS file
import AdminDashBoard from "./AdminDashBoard";

const Viewuser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9952/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <AdminDashBoard/>
      <div className="user-list-container">
        {users.map((user) => (
          <div className="user-list-item" key={user.userId}>
            <div className="user-info">
              <p><span className="label">User ID:</span> <span className="value">{user.userId}</span></p>
              <p><span className="label">User Name:</span> <span className="value">{user.userName}</span></p>
              <p><span className="label">Email:</span> <span className="value">{user.email}</span></p>
              <p><span className="label">Mobile:</span> <span className="value">{user.mobile}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewuser;
