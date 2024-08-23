
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout1 from "./Logout1";

const AdminDashBoard = () => {
  return (
    <Navbar expand="lg" style={{ height: "70px", backgroundColor: "#343a40", borderBottom: "1px solid #ccc" }}>
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <b style={{ color: "white", fontSize: "20px" }}>
            Welcome Admin
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-navbar-nav" />
        <Navbar.Collapse id="admin-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link
              as={Link}
              to="/viewUser"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Registered users
            </Nav.Link>
          <Nav.Link
              as={Link}
              to="/StaffDetails"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Manage Staff
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/AdminApplicationrequest"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              View Applications
            </Nav.Link>
            
            
            <Nav.Link
              as={Link}
              to="/Department"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Manage Departments
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/AdminStats"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Stats
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/stafflogin"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              <Logout1 />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminDashBoard;
