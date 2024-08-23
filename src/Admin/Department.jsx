import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";
import './Department.css'; // Import custom CSS file

const Department = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9952/getDepts")
      .then((res) => {
        setDepartment(res.data);
        console.log(department);
      })
      .catch((error) => {
        console.error("Error fetching Department List:", error);
      });
  }, []);

  return (
    <div>
      <AdminDashBoard />
      <div className="user-table-container p-lg-5">
        <div className="d-flex justify-content-end mb-4">
          <Link to="/AddDepartment" className="text-decoration-none">
            <Button className="add-department-button">Add Department</Button>
          </Link>
        </div>
        <h2 className='text-center mb-lg-5'>Department Details</h2>
        
        <Table striped bordered hover responsive>
          <thead>
            <tr className='text-center'>
              <th>Department ID</th>
              <th>Department Name</th>
              <th>Course Type</th>
              <th>Vacancy</th>
            </tr>
          </thead>
          <tbody>
            {department.map((dept) => (
              <tr className='text-center' key={dept.id}>
                <td>{dept.id}</td>
                <td>{dept.dept}</td>
                <td>{dept.courseType}</td>
                <td>{dept.vacancy}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Department;
