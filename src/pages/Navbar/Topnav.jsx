import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './logo.png'; // Import your logo image here

const Topnav = () => {
  return (
    <Navbar expand="lg" style={{ height: "70px", backgroundColor: "#FF0000", borderBottom: "1px solid #ccc" }}>
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="University Logo" style={{ height: "50px", marginRight: "10px" }} />
          <b>
            <span style={{ color: "white" }}>University of </span>
            <span style={{ color: "white", fontWeight: "bold" }}>Houston</span>
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/course"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Courses
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/stafflogin"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Staff Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/studentlogin"
              style={{ color: "#FFD700", fontWeight: "lighter" }}
              className="nav-link"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#FFD700'}
            >
              Student Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
