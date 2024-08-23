import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../Navbar/Topnav";
import './StudentLogin.css'; // Import the CSS file

const StudentLogin = () => {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitt = (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    if (!userName) {
      setUsernameError("Username is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    axios
      .get(`http://localhost:9952/studentLogin/${userName}/${password}`)
      .then((res) => {
        sessionStorage.setItem("userName", res.data.userName);
        sessionStorage.setItem("userId", res.data.userId);
        sessionStorage.setItem("email", res.data.email);
        sessionStorage.setItem("mobile", res.data.mobile);

        navigate("/layerform");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Invalid Login",
          text: "Please enter valid credentials or click sign-up if you are new.",
        });
      });
  };

  return (
    <div>
      <Topnav />
      <Container fluid className="bg-gradient login-container">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={4} className="py-5">
            <div className="login-card p-4 shadow rounded bg-white">
              <div className="text-center mb-4">
                <Image
                  src="https://static.vecteezy.com/system/resources/previews/006/470/647/original/university-education-logo-design-template-free-vector.jpg"
                  alt="College Logo"
                  fluid
                  className="logo"
                />
                <h2 className="mt-3">Student Login</h2>
              </div>

              <Form onSubmit={handleSubmitt}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="Enter your email"
                    className="form-input"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    isInvalid={!!usernameError}
                    pattern=".+@gmail\.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    {usernameError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!passwordError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {passwordError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-4 w-100 login-btn"
                >
                  Login
                </Button>
              </Form>
              <div className="text-center mt-4">
                <p className="text-lg">
                  New User?{" "}
                  <Link to="/registerstudent" className="link">Sign Up Here!</Link>
                </p>
                <p className="text-lg">
                  <Link to="/" className="link">Go to Home</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col>
              <p className="mb-0">University of Houston</p>
              <p className="mb-0">Houston, Texas 77204</p>
              <p className="mb-0">(713) 743-2255</p>
            </Col>
            <Col>
              <h5>About Us</h5>
              <p>
                You can follow us on our social media platforms including Facebook, Instagram, YouTube, Twitter, and Google+ @ University of Houston.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default StudentLogin;